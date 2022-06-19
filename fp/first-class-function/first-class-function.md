# First Class Function

---

# First Class Citizen

## What does it mean?

It is a data type just like any other data types that cann be:

* Stored in arrays.
* Assigned to variables.
* Passed/Return as function parameters.

---

# Examples

```js
// redundent
const hi = name => `Hi ${name}!`;
const greeting = name => hi(name);

// first class function
const hi = name => `Hi ${name}!`;
const greeting = hi;
```

---

```js
// redundent
ajaxCall(json => callback(json));

// first class function
ajaxCall(callback);
```

---

```js
// redundent
users
  .filter(user => user.age >= 18)
  .map(user => user.name)
  .forEach(userName => greeting(userName));

// first class function
users
  .filter(_.compose(_.gte(18), _.prop('age')))
  .map(_.prop('name'))
  .forEach(greeting);
```

---

# Pointfree style

It means functions that never mention the data upon which they operate.

It remove redundent names and keep us focus on the transformation itself.

> Not all functional code is pointfree and that is O.K.

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

# Practice
