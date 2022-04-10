# How to write good unit test?

* Avoid testing __How__ things work, focus on __What__ they do.
* Given -> When -> Then.
* One suite focus on one thing.
* Independent

---

GIVEN <some input and starting conditions>
WHEN <we call some function or take some action>
THEN <some condition SHOULD be true>

---

# What is a **GOOD** unit test?

---

# What do we expect from a unit test?

* Give us the confidence that the code works as expected.
* Prevent regressions as when we add more code.
* When reading the code.
* When it failed.

---

```typescript
// handleInput.js
function handleInput(input: string) {
  if (parseInt(input, 10) > 73) {
    return '10';
  }
  return input;
}
```

---

# Confidence

Don't just MAKE it pass. Try to make it fail first.
  * why does ut fail is importart

---

# Think about how would the code be used instead of how would it be implemented.

---

# Common misunderstanding

* UT is all about coverage
* With UT there should be no bug

---

# Common mistake

* Over-specify(Same thing as testing implementation details?)
* Testing implementation detail

---

# FAQs

---

* Snapshot testing, should I use it?
* Happy path, bad path.
* One big suit to cover everything for reuse the testing fixtures vs many small suites which duplicate the preparations?
* Multi assertion in single suit or one assertion for each suit?(For example, test option's selected state)
* Should I cover all of the dependent module's paths in consumer modules?
* Should I cover all of the cases that already covered in the source modules in the module which I want to extract from the source module when doing refactor?
