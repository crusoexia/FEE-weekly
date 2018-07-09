autoscale: true
build-lists: true

# Flow experience sharing

---

# Motivition

---

# Experience

* Coding bolder
* Better dev tools
* Better documentation
* Use with React
* Use with Immutablejs [Immutable.type.js](https://github.com/facebook/immutable-js/blob/master/type-definitions/immutable.js.flow)
* Integrate with third party libs [Library Definitions](https://flow.org/en/docs/libdefs/creation/)
* Will it change your way to write javascript? (Depends)

---

# Compare with Typescript

* basic syntax - almost the same [Typescript basic](https://www.typescriptlang.org/docs/handbook/basic-types.html)
* Error message - Typescript
* Boilerplate - tsc vs Babel
* Community - Typescript
* Better performance on windows - Typescript

---

# Compare with Typescript

## Philosophy

* Typescript is a superset of javascript

  ```typescript
    class Student {
      fullName: string;
      constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
      }
    }
  ```

---

# Compare with Typescript

## Philosophy

* Flow is type checker

  ```js
    class Student {
      firstName: string
      fullName: string
      middleInitial: string
      constructor(firstName: string, middleInitial: string, lastName: string) {
        this.firstName = firstName
        this.middleInitial = middleInitial
        this.fullName = firstName + " " + middleInitial + " " + lastName;
      }
    }
  ```

---

# Should we use static type checking?

---

# Cons to use static type

* Dynamic type system is flexable, static type system is safe. It is a tradeoff
* Non of them are javascript, no official adopt
* Type is complicate 
* When you are not familiar with it, it can reduce productivity
* Does it really reduce bugs significant?

---

# Conclusion

---

# Discussion
