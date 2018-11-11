autoscale: true
build-lists: true
theme: Plain Jane, 5

# React drag & drop

---

# [The HTML5 API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

---

# [Browser support](https://caniuse.com/#search=drag%20and%20drop)

---

# With html5 dnd API you can:

* By default a 'screenshot' drag preview
* Customize transfer data
* Customize drag effect

---

# Demo

---

# Draw back

* Imperative API
* Doesn't support touch device

---

# [React-dnd](http://react-dnd.github.io/react-dnd/about)

## Seperate the React API from actual implmentations

---


# [Concept and Abstructions](http://react-dnd.github.io/react-dnd/docs/overview)

* Drag Item and types
* Monitor - Drag state and data to transfer
* Connector - connect the React component with actual drag element
* DragSource
* DropTarget

---

# Demo - Email editor

---

# Available backends

* react-dnd-html5-backend
* react-dnd-multi-backend
* react-dnd-test-backend
* and more

---

# Pros

* Declarative API
* Reactive programming
* By plug different backends to support different use cases
* UT friendly

---

# Cons

* Poor support for SSR
* No one reply your issue on github :(
