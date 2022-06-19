# First Class Function

---

# First Class Citizen

---

# What does it mean?

It is a data type just like any other data types that cann be:

* Stored in arrays.
* Assigned to variables.
* Passed/Return as function parameters.

---

# Why does it matter?

```js
const hi = name => `Hi ${name}!`;
const greeting = name => hi(name);
```

First class function
```js
const hi = name => `Hi ${name}!`;
const greeting = hi;
```

More examples
```js
// redundent
ajaxCall(json => callback(json));

// first class function
ajaxCall(callback);
```

```js
// redundent
users
  .filter((user) => user.age >= 18)
  .map(user => user.name)
  .forEach(userName => greeting(userName));

// first class function
users
  .filter(_.compose(_.gte(18), _.prop('age')))
  .map(_.prop('name'))
  .forEach(greeting);
```

---

# Point free

---

# Purity

> A pure function is a function that, given the same input, will always return the same output and does not have any observable side effect.

## Function definition in Math world.

> A function is a special relationship between values: Each of its input values gives back exactly one output value.
> -- mathisfun.com

---

# Pure VS Impure

## `slice` vs `splice`

```js
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

```js
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

# Why is purity matter?

* Cacheable
* Self-document
* Testable
* Reasonable

---

# Currying | Partial programming

---

# Debugging
