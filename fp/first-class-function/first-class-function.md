theme: Huerta, 6

# First Class Function

---

# First Class Citizen

## What does it mean?

Function is a data type just like any other data types that can be:

* Stored in arrays.
* Assigned to variables.
* Passed/Return as function parameters.

---
[.build-lists: true]

# Example 1

* __Redundant__

    ```javascript
    const hi = name => `Hi ${name}!`;
    const greeting = name => hi(name);
    ```

* __First class function__

    ```javascript
    const hi = name => `Hi ${name}!`;
    const greeting = hi;
    ```

---
[.build-lists: true]

# Example 2

* __Redundant__

    ```javascript
    ajaxCall(json => callback(json));
    ```

* __First class function__

    ```javascript
    ajaxCall(callback);
    ```

---
[.build-lists: true]

# Example 3

* __Redundant__

    ```javascript
    users
      .filter(user => user.age >= 18)
      .map(user => user.name)
      .forEach(userName => greeting(userName));
    ```

* __First class function__

    ```javascript
    users
      .filter(compose(gte(18), prop('age')))
      .map(prop('name'))
      .forEach(greeting);
    ```

---

# Function of Functions

A function that receives or returns one or more other function values is a __Higher-Order Function__.

> Only with _First Class Functions_ we can have _HOF_ and enter the gate of functional programming.

Consider these list functions: `map`, `filter`, `reduce`;

---

# Pointfree style

It means functions that never mention the data upon which they operate.

It remove redundent names and keep us focus on the __What__ and __Why__.

---

# Purity

> A function is a special relationship between values: Each of its input values gives back exactly one output value.
> -- mathisfun.com

---

# Pure VS Impure

## `slice` vs `splice`

```javascript
const xs = [1,2,3,4,5];

// pure
xs.slice(0,3); // [1,2,3]
xs.slice(0,3); // [1,2,3]
xs.slice(0,3); // [1,2,3]

// impure
xs.splice(0,3); // [1,2,3]
xs.splice(0,3); // [4,5]
xs.splice(0,3); // []
```

```javascript
// impure
let minimum = 21;
const checkAge = age => age >= minimum;

// pure
const checkAge = (age) => {
  const minimum = 21;
  return age >= minimum;
};
```

---

# Compose with _point-free style_, _pure_ _High-Order functions_ results in liner pipeline of code focus on declare data transformations.

```javascript
const isFpBook = compose(eq('FP'), prop('topic'));

const fpBookNames = compose(map(prop('bookName')), filter(isFpBook))(books);
```

---

# Partial Application

Let's implement a function `gte` which determind whether the given number is greater or equal than the target:

```javascript

```

In previous example 

```javascript
const isFpBook = compose(eq('FP'), prop('topic'));
```

Pay attention to the _eq_ and _prop_ functions, how could we use it like this?

---

# Implement `eq`

```ts
const eq = <T, S>(target: T) => (source: S) => (source === target);
```

# Implement `prop`

```ts
const prop = (propName: string) => (sourceObj: Record<string, unknown>) => sourceObj[propName];
```

[Online sample](https://codepen.io/crusoexia/pen/yLvmMaB)

---

# Currying

---

Consider function:

```
x = f(a, b, c)
```

After currying:

```
g = curry(f);
h = g(a);
i = h(b);
x = i(c);
```

Put together
```
x = curry(f)(a)(b)(c);
```

---

# Currying Usage

[Live playground](https://codepen.io/crusoexia/pen/QWQepvX)
