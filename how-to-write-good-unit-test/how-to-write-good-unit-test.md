# How to write good unit test?

---

# What is a **GOOD** unit test?

---

# What do we expect from a unit test?

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

# Think about how would the code be used instead of how would it be implemented.

---

# Common misunderstanding

* UT is all about coverage
* With UT there should be no bug

---

# FAQs

---

* Happy path, bad path.
* One big suit to cover everything for reuse the preparations vs many small suites which duplicate the preparations?
* Should I cover all of the dependent module's paths in consumer modules?
* Should I cover all of the cases that already covered in the source modules in the module which I want to extract from the source module when doing refactor?
