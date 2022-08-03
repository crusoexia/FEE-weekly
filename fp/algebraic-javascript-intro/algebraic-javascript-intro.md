theme: Huerta, 6
autoscale: true

# Algebraic JavaScript

![inline](https://github.com/fantasyland/fantasy-land/raw/master/figures/dependencies.png)

[.footer: Algebraic structures defined in [Fantasy Land](https://github.com/fantasyland/fantasy-land) which inspired by Haskell.]

---

# Algebra

> An algebra is a set of values, a set of operators that it is closed under and some laws it must obey.
> -- Fantasy Land

---

# What does it matter to programming?

* Using _Category theory[^1]_ to solve programming problem - Haskell[^2] style functional programming.

[^1]: See [Category theory](https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch05#category-theory) in "Mostly Adequate Guide"

[^2]: [History of Haskell](https://en.wikipedia.org/wiki/Haskell)

---

# Functional programming languages

* Haskell
* Elm

---

# JavaScript libraries:

* Ramda
* Sanctuary

---

# Putting the value into box - Container.

![inline](./container.png)

The container "F" hosts the value "a".

---

# What is "Container"

[.column]
The ability and a standard way to construct values wrapped within some context.

In native fp languages like Haskell and Elm, there is not a concept called "Container". It is just natural to host value in type structures.

[.column]
```javascript
// Container defined in mostly-adequate-guide 
class Container {
  constructor(x) {
    this.$value = x;
  }

  static of(x) {
    return new Container(x);
  }
}
```

```javascript
// Sanctuaryjs
S.Just(1);
```

```haskell
-- haskell
Just 1
```

---

# Functor

![inline](./functor.png)

* “Functors” are the containers that can be used with “map” function. - _Mostly Adequate Guide_
* Functor is any data type that defines how “fmap” applies to it. - _Haskell_
* A Functor is a "Container" which can apply functions to its value obey some law.

---

# Interesting facts of Functor

* Different Functor has different implementation of `map`.
* We safely keep the operation inside the Container, which can achieve some mighty effect like lazy evaluation, change impure action to pure action.
* The result of the `map` is also a Functor, which means it can keep `map` away, it is the base infrastructure for composition.

---

# Monad

---

# References

* Fantasy Land
* Mostly Adequate Guide
* Math Is Fun
