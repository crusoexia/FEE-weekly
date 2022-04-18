theme: Huerta, 1
build-lists: true

# The Screaming Architecture

---

# Imagine you are a coffee shop keeper...

You have millions of dollar budget, you want to use them to set up a new coffee shop. 

What do you want the potential customer thought of your new shop when they passing by it with a glance?

* It is a wooden/stone/steel building build with a special method.
* It is a coffee shop who sells coffee.

---

# What is "Screaming Architecture"?

It is about __"what"__ does your application architecture want to tell.

---

# A typical React project

What does these project level(root) packages scream?

```
|-- src
|   |-- components
|   |-- pages
|   |-- reducers
|   |-- selectors
|   |-- utils
|-- test
|   |-- components
|   |-- pages
|   |-- reducers
|   |-- selectors
|   |-- utils
```

* Well...it looks like a redux project? :worried:

---

# A typical nodejs project

What does it scream?

```
|-- config
|-- libs
|-- middlewares
|-- models
|-- node_modules
|-- routes
```

* It is a... nodejs project...? :tired_face:

---

# What should your application architecture scream?

The "business intention" other than the "technical role".

---

# Refine the React project

```
|-- src
|   |-- coffee
|   |-- deliverAgent
|   |-- menu
|   |-- order
```

* Oh, it is a coffee shop! :thumbsup:

---

# Why is the "by technical role" approach bad?

* It's difficult to figure out the project's purpose.
* It violate the SDP(Stable Dependencies Principle), by making the project structure coupled with certain technical.
* It violate the CCP(Common Closure Principle).
* It's hard to find the correct file(s) you need to modify.

---

# When changes come...

What action should you take when we want to add a new method to make coffee?

[.column]
By technical role:

```
|-- src
|   |-- components
|   |   |-- *CoffeeDetail.jsx
|   |   |-- OrderPayment.jsx
|   |-- pages
|   |   |-- Menu.jsx
|   |   |-- OrderView.jsx
|   |-- reducers
|   |   |-- *coffee.js
|   |   |-- order.js
|   |-- selectors
|   |   |-- *coffee.js
|   |   |-- order.js
|   |-- utils
|   |   |-- order.js
|-- test
|   |-- reducers
|   |   |-- *coffee.test.js
```

[.column]
By business module:

```
|-- src
|   |-- coffee
|   |   |-- *reducer.js
|   |   |-- *reducer.test.js
|   |   |-- *selector.js
|   |   |-- *CoffeeDetail.js
|   |   |-- *CoffeeDetail.test.js
|   |   |-- index.js
|   |-- menu
|   |   |-- MenuPage.js
|   |   |-- index.js
|   |-- order
|   |   |-- reducer.js
|   |   |-- reducer.test.js
|   |   |-- selector.js
|   |   |-- utils.js
|   |   |-- OrderPayment.js
|   |   |-- OrderPayment.test.js
|   |   |-- OrderViewPage.js
|   |   |-- index.js
|   |-- deliverAgent
```

---

# Compliance with 'Common Closure Principle'(CCP)

> Gather into components those classes that change for the same reasons and at the same times. Separate into different components those classes that change at different times and for different reasons.

---

# Anywhere else can it apply?

### What does your (?) scream?

* What does your __variable/function/module name__ scream?
* What does your __test case__ scream?
* ...

---

# Conclution
[.build-lists: false]

It is all about to make your application's architecture focus on business intention(the problem it want to solve) so that your application can:

* Easy to figure out its purpose.
* Easy to workaround.
* Stable for technical changes over time.

> Don't let your application architecture be kidnapped by frameworks or technical details.
