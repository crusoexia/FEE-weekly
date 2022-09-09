theme: Plex, 1

# Functors

---

# Functor typeclass

__Haskell__:
> Functor is used to present the thing that can be mapped. 
> Any type that has the __Container Property__ can be regarded as Functtor 

Functor in Haskell:

```haskell
class Functor f where
  fmap :: (a -> b) -> f a -> f b
```

---

# Array - List Functor

Array(List) is a Functor due to obey the __Functor laws__ and the implementation of __fmap__.

```javascript
const add = curry((a, b) => (a + b));

[ 1, 2, 3 ].map(add(10)) // [ 11, 12, 13 ]
```

---

# fmap of Functor

Functor defines one function `fmap`, it doesn't have default implementation, every concrete type of Functor should implement it.

Through the abstruct `fmap`, we can provide whatever Functor to it, and the concreted `fmap` method will be called. This is __polymorphic__ of `fmap`.

```javascript
const fmap = curry((fn, f) => f.map(fn));

const div = curry((a, b) => (a / b));

compose(
  fmap(div(2)),    // [ 50.5, 51, 51.5 ]
  fmap(add(100)),  // [ 101, 102, 103 ]
)([ 1, 2, 3 ]);
```

---

# Maybe

> Maybe you are a robot.

__Haskell__:

```Haskell
data Maybe a = Nothing | Just
```

```Haskell
instance Functor Maybe where
  fmap f (Just x) = Just (f x)
  fmap f Nothing = Nothing
```

---

# JavaScript Maybe

[.column]

"Mostly Adequate guide" implementation:

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
    return this.isNothing() ? this : Maybe.of(fn(this.$value));
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

## Practice: [Cabinet Box](https://codepen.io/crusoexia/pen/MWGYeZM)

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
* [Sanctuary](https://sanctuary.js.org/)
