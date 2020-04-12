autoscale: true
build-lists: true
theme: Next, 8

# Single Responsibility Principle

---

* FUNCTIONS SHOULD DO ONE THING. THEY SHOULD DO IT WELL. THEY SHOULD DO IT ONLY.[^1]
* A class or module should have one, and only one, *reason* to change.[^2]
* A module should be responsible to one, and only one, actor.[^3]

[^1]: <<Clean Code>>

[^2]: <<Agile Software Development>>

[^3]: <<Clean Architecture>>

---

> FUNCTIONS SHOULD DO ONE THING. THEY SHOULD DO IT WELL. THEY SHOULD DO IT ONLY.

---

# What is "one thing"?

---

```typescript
function extract(config: Config, fa: FileAccessor, args?: Args = {}) {
  const outDir = args.out ? path.resolve(args.out) : path.join(paths.appRoot, config.localePath, DEFAULT_OUT);
  if (args.locale) {
    extractSpecified(config, fa, args.locale, outDir);
  } else {
    extractAll(config, fa, outDir);
  }
}
```

---

```typescript
function withLogParagraph(logContent: (...args: any[]) => void) {
  return (...args: any[]) => {
    log('');
    logContent(...args);
    log('');
  };
}
```

---

* One level of abstraction below the stated name of function
* Cannot extract another function from it with the name which is not merely a restatement of the implementation.
* The "7 line" rule.

---

# Refactored `extract`

```typescript
function getOutDir(out: string, localePath: string) {
  return args.out ? path.resolve(args.out) : path.join(paths.appRoot, config.localePath, DEFAULT_OUT)
}

function extract(config: Config, fa: FileAccessor, args?: Args = {}) {
  const outDir = getOutDir(args.out, config.localePath);
  if (args.locale) {
    extractSpecified(config, fa, args.locale, outDir);
  } else {
    extractAll(config, fa, outDir);
  }
}
```
---

> A class or module should have one, and only one, **reason** to change.

---

> A module should be responsible to one, and only one, actor.
