theme: Huerta, 6

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

# Putting the value into box - Container.

![inline](./container.png)

The container "F" hosts the value "a".

---

# What is "Container"

The ability and a standard way to construct type-wrapped value.

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

[.footer: In native fp languages like Haskell and Elm, there is not a concept called "Container". It is just natural to host value in type structures.]

---

## Functor and Monad
