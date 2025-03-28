---
title: APIs to Improve UT Experience
theme: dracula
---

# APIs to Improve UT Experience

---

# Jest

----

## 👉 `jest.mock()`

Leverage the _auto-mock_

----

Previous

```typescript
jest.mock('path/to/module', () => {
    return {
      namedExport: jest.fn(),
      // other mock implementations
    };
});
```

Or

```typescript
// path/to/__mocks__/module.ts
export const namedExport = mockImplementation;

// other/x.test.ts
jest.mock('path/to/module');
```

----

### Limitations

* Cumbersome
* Ugly
* All test shares the same mock implementation; Lack of flexibility

----

By default `jest.mock` would do auto-mock without the `factory`:

```typescript
jest.mock('./module');
```

----

Now

```typescript [2-9]
import { namedExport } from 'path/to/module';

jest.mock('path/to/module');

test('test a', () => {
  (namedExport as jest.Mock).mockImplementation(() => 'a');
  //...
  expect(namedExport).toHaveBeenCalledWith(...);
});

test('test b', () => {
  (namedExport as jest.Mock).mockImplementation(() => 'b');
  //...
  expect(namedExport).toHaveBeenCalledWith(...);
});
```
<!-- .element: style="font-size:14pt" -->

----

## 👉 `jest.mocked()`

Wrap mocked object with `jest.Mock` typescript interfaces.

----

Previous

```typescript
import { namedExport } from './module';

jest.mock('./module');

//...

(namedExport as jest.Mock).mockImplementation();
```

----

### Limitations

* Ugly
* The type conversion loss mocked module's type information

----

Now

```typescript
import { namedExport } from './module';

jest.mock('./module');

//...

jest.mocked(namedExport).mockReturnValue({
  propA: 'a',
  propB: 'b', // type error if return type is not match
});
```

----

#### 👉 `Mocked.mockReturnValue` & `Mocked.mockResolvedValue`

----

Previous

```typescript
test('test', () => {
  jest.mocked(fn).mockImplementation(() => 'value');
  jest.mocked(fnResolve).mockImplementation(() => Promise.resolve('value'));
  jest.mocked(fnReject).mockImplementation(() => Promise.reject(new Error('error')));
});
```
<!-- .element: style="font-size:11pt" -->

----

### Limitations

* Cumbersome
* No return value auto-completion/prompt

----

Now

```typescript
test('test', () => {
  jest.mocked(fn).mockReturnValue('value');
  jest.mocked(fnResolve).mockResolvedValue('value');
  jest.mocked(fnReject).mockRejectedValue(new Error('error'));
});
```
<!-- .element: style="font-size:14pt" -->

----

#### 👉 `jest.resetAllMocks()` & `jest.restoreAllMocks()`

----

Previous

```typescript
import { namedExport } from './module';

jest.mock('./module');

test('a', () => {
  const mocked = jest.mocked(namedExport).mockReturnValue('a');

  try {
    // expects
  } finally {
    mocked.mockReset();
  }
});

test('b', () => {
  const mocked = jest.mocked(namedExport).mockReturnValue('b');
  try {
    // ...
  } finally {
    mocked.mockReset();
  }
});
```
<!-- .element: style="font-size:11pt" -->

----

### Limitations

* Ugly
* Cumbersome

----

Now

```typescript [5-8]
import { namedExport } from './module';

jest.mock('./module');

beforeEach(() => {
  jest.resetAllMocks();
  // jest.restoreAllMocks();
});

test('a', () => {
  jest.mocked(namedExport).mockReturnValue('a');

  expect(namedExport()).toEqual('a');
});

test('b', () => {
  jest.mocked(namedExport).mockReturnValue('b');

  expect(namedExport()).toEqual('b');
});
```
<!-- .element: style="font-size:11pt" -->

----

### 👉 `jest.requireActual`

**Use Case**: To mock certain functions of one module and keep others with
actual implementation.

----

Previous

* Almost impossible without adjust structure of the module to be mocked.
* Otherwise for the functions you should not care, now you have care how
would them affect the system and do _proper_ mock implementation. **Noisy**.

----

Now

```typescript
jest.mock('./module', () => {
  const actual = jest.requireActual('./module');
  return {
    ...actual,
    mockFunction: jest.fn(),
  };
});
```

----

> There is a counter-part API: `jest.requireMock()`.

----

### 👉 `jest.createMockFrom()`

----

_Example_: Mock injected dependency

```typescript
test('test', () => {
  const mockDataLoader = jest.createMockFrom('./dataLoader');

  mockDataLoader.load.mockResolvedValue([/* ... */]);

  expect(functionToTest(mockDataLoader)).toEqual('result');
});
```
<!-- .element: style="font-size:14pt" -->

----

## 👉 Mock Class

Jest can auto-mock ES6 class

----

Example

```typescript
// loadData.ts
async function loadData() {
    try {
        const resp = await fetch(url);
        // ...
    } catch (e) {
        const logger = new Logger({/*...*/});
        logger.log(e.message);
        throw new Error('...', { cause: e });
    }
}
```

----

Previous

```typescript
jest.mock('./Logger', () => {
  const logger = {
    log: jest.fn(),
    info: jest.fn(),
  };
  return {
    Logger: jest.fn(() => logger),
  };
});

it('log error', async () => {
  jest.mocked(fetch).mockRejectedValue(new Error('remote error'));

  await expect(() => loadData()).rejects.toThrow('remote error');
  
  expect(Logger).toHaveBeenCalledWith({ app: 'App_Name', version: 'App_Version' });
  const loggerIns = Logger();
  expect(loggerIns.log).toHaveBeenCalledWith('Error: remote error');
});
```
<!-- .element: style="font-size:12pt" -->

----

### Limitations

* Ugly
* The mock implementation would lost after `jest.resetAllMocks`

----

Now

```typescript [8-11]
jest.mock('./Logger');

it('log error', async () => {
  jest.mocked(fetch).mockRejectedValue(new Error('remote error'));

  await expect(() => loadData()).rejects.toThrow('remote error');
  
  expect(Logger).toHaveBeenCalledWith({ app: 'App_Name', version: 'App_Version' });

  const logger = jest.mocked(Logger).mock.instances.at(0);
  expect(logger.log).toHaveBeenCalledWith('Error: remote error');
});
```
<!-- .element: style="font-size:11pt" -->

---

# memfs

In Memory file system

Mock file system interactions

----

## Preparation

Create manual mock for `node.fs` modules

```sh
/__mocks__
  /fs.ts
  /fs
    /promises.ts
/src
  /...
```

----

## Preparation

```typescript
// __mocks__/fs.ts

import { fs } from 'memfs';

export default fs;
```

```typescript
// __mocks__/fs/promises.ts

import { fs } from 'memfs';

export default fs.promises;
```

----

## Usage

Mock the file system:

```typescript
import { vol } from 'memfs';

jest.mock('node:fs');
jest.mock('node:fs/promises');

it('should by-pass the incomplete "package.json"', async () => {
  vol.fromJSON({
    '/package.json': '{ "name": "package", "version": "1.0.0" }',
    '/a/b/c/package.json': '{ "type": "commonjs" }',
    '/a/b/package.json': '{ "name": "pkg" }',
    '/a/package.json': '{ "version": "1.0.0" }',
  });

  expect(await getProjectRoot('/a/b/c')).toEqual('/');
});
```
<!-- .element: style="font-size:14pt" -->

----

It can write file to memory file system:

```typescript
import fs from 'fs/promises';

jest.mock('fs/promises');

it('by default log to file', async () => {
  const logger = await createLogger();
  logger.info(securityEvent('test_debug'));

  expect(await fs.readFile(path.join('/opt/active/logs/security.log'), {/***/}))
    .toMatch('test_debug');
});
```
<!-- .element: style="font-size:12pt" -->

----

Clean up memory file system:

```typescript
import { vol } from 'memfs';

afterEach(() => {
  vol.reset();
});
```
