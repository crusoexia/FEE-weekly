autoscale: true
build-lists: true

# Beyond Backbone

---

# Concerns on the UI

* where am I?
* fetch / update data
* update data model
* render view
* handle user action

---

# Build up a view layer

* hide the render detail - jquery handlebars and active.render
* provide machanism to map data state to view state
* provide machanism to handle user action

---

# Organize your data - flux like architecture

> Normal developer cares about the code, good developer cares about the data organization.

At anytime the data states should present the current view.

---

# Don't do the things that none of your business - SRP

* Two phase of UI change
 - calculate data state -> render according to state

---

# Elegant vs performance 

* Split bigger to smaller
* Compromise when it is necessary
