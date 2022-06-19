# Partial programming

---

# Recall a example in __First class function__:

```js
users
  .filter(_.compose(_.gte(18), _.prop('age')))
  .map(_.prop('name'))
  .forEach(greeting);
```

Pay attention to the `_.gte` and `_.prop`.

---

# `_.gte`

```ts
const gte = <T, S>(target: T) => (source: S) => (source >= target);
```

# `_.prop`

```ts
const prop = (propName: string) => (sourceObj: Record<string, unknown>) => sourceObj[propName];
```

---

# High order function in mathimatic

---

# Currying

---

# Debugging
