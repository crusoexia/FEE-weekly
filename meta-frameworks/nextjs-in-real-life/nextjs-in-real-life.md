# next.js In Real Life

## Impressions after rewrite "activeworks-webui" by next.js for a month

---

# What had been done in one month?

----

* Passport integration
* Session management
* Routing
* Call internal (SOAP) services
* Tests
* CI and deployment
* Logging and Operation

---

# Impressions

* Start fast
* There are differences

---

# Facts

* Framework compiler

To reduce the complexity and gap between server & client components
(Like using server action; 'use cache' in experimental)

---

# Pros

---

## Isomorphic CAN reduce Duplication

* Auth management
* Reduce client-side API call and state management
* Routing on one side

----

## Rich Render Patterns

Fast First-Page-Rendering
Render Performance
A lot render best-practices

----

## Out of the Box

* Setup project fast
* Start development fast
* Setup deployment fast

---

# Cons

----

## Environment Diversity(or Pollution)

Same code(Server-Action etc.) might be used by: Browser, node and 
Edge server. Things goes worst for Testing which cannot leverage
next.js and react's new compiler to handle specific syntax.

----

## Complex

* More concepts
* More area need to be take care
* More mistakes
* Environment differences

----

## Framework intrusive

Inflexible

---

## Remarkable examples

---

# Conclusion

It feels like developing Asp.net, but more powerful.
