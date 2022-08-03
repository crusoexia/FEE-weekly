theme: Huerta, 6

# Functors

---

# 1. Identity

[.column]
In Mathematic

An equation that is true no matter what values are chosen.

```
a * 1 = a
a + 0 = a
a / 2 = a * 0.5
```

[.column]
JavaScript

```javascript
// light fp
const identity = a => a;
identity(1); // 1

// Functor
class Identity {
  static of(x) {
    return new Identity(x);
  }

  constructor(x) {
    this.$value = x;
  }

  map(f) {
    return Identity.of(f(this.$value));
  }
}

Identity
  .of(3)
  .map(x => x * 2) // Identity 6
```

---

# 2. Array

Array is an Functor by our definition.

```javascript
Array.of(6) // Array [6]

const add = curry((a, b) => (a + b));

Array.of(6).map(add(10)).map(Math.sqrt) // Array [4]
```

---

# Map For Functor

Though we can keep map functions to a Functor by calling `Functor.map`, but sometimes it is not very handy, we want a more flexible way to compose the functions applied to the Functors.

```javascript
const map = curry((fn, f) => f.map(fn));

map(Math.sqrt)(Identity.of(25)); // Identity 5

compose(
  map(Math.sqrt),         // Array [6]
  map(prop('quantity')),  // Array [9]
)(Array.of({ quantity: 9 }));
```

---

# 3. Maybe

[.column]
Maybe you are a human...

```javascript
class Maybe {
  get isNothing() {
    return this.$value === null || this.$value === undefined;
  }

  constructor(x) {
    this.$value = x;
  }

  static of(x) {
    return new Maybe(x);
  }

  map(fn) {
    return this.isNothing ? this : Maybe.of(fn(this.$value));
  }
}
```

[.column]
Sample

```javascript
const getName = man => man.name;

const greeting = name => (`Hello ${name}`);

Maybe
  .of({ name: 'John' })
  .map(getName)
  .map(greeting); // Maybe 'Hello John'

Maybe
  .of(undefined)
  .map(getName)
  .map(greeting); // Maybe Nothing
```

[.footer: The power of "Maybe": we can keep map functions to it without care whether the value is nullish.]

---

# Lift Maybe

```javascript
const maybe = curry((v, f, m) => {
  if (m.isNothing) {
    return v;
  }

  return f(m.$value);
});

```

---

# Usage

```javascript
const getName = ppl => ppl.name;

const greeting = name => (`Hello ${name}`);

const maybeSayHi = compose(maybe('You are not a human.', greeting), map(getName), Maybe.of);

maybeSayHi({ name: 'John' })  // 'Hello John'
maybeSayHi({ nam: 'Jane' })   // 'You are not a human'
maybeSayHi(null)              // 'You are not a human'
```

---

The Maybe functor provide us an elegant way to handle the nullish situations.

---

# 4. Either

Either allow us to create branch in the composition pipeline.

[.column]
```javascript
class Either {
  constructor(x) {
    this.$value = x;
  }
}
```

[.column]
```javascript
class Left extends Either {
  get isLeft() {
    return true;
  }

  get isRight() {
    return false;
  }

  static of(x) {
    return new Left(x);
  }

  map() {
    return this;
  }
}
```

[.column]
```javascript
class Right extends Either {
  get isLeft() {
    return false;
  }

  get isRight() {
    return true;
  }

  static of(x) {
    return new Right(x);
  }

  map(fn) {
    return Right
      .of(fn(this.$value));
  }
}
```

---

# Sample

---

# Lift Either

```javascript
// either :: (a -> c) -> (b -> c) -> Either a b -> c
const either = curry((f, g, e) => {
  let result;

  switch (e.constructor) {
    case Left:
      result = f(e.$value);
      break;

    case Right:
      result = g(e.$value);
      break;
  }

  return result;
});

```

---

# Usage

```javascript
// zoltar :: User -> _
const zoltar = compose(console.log, either(id, fortune), getAge(moment()));

zoltar({ birthDate: '2005-12-12' });
// 'If you survive, you will be 10'
// undefined

zoltar({ birthDate: 'balloons!' });
// 'Birth date could not be parsed'
// undefined
```

---

# 5. IO

The magic to change impure to pure.

```javascript
class IO {
  constructor(fn) {
    this.unsafePerformIO = fn;
  }

  static of(x) {
    return new IO(() => x);
  }

  map(fn) {
    return new IO(compose(fn, this.unsafePerformIO));
  }
}
```

[.footer: It is also indicate the ability of lazy evaluation.]

---

# References

* Mostly Adequate Guide
