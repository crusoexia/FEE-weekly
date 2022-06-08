theme: Simple, 1

# Active micro-frontend pattern design consideration

---

# The Goal
* Reuse
* Business autonomy(Separation of concern; Business automicity)
* Independent deployment(Dependency; Operation chain)
* Tech stack isolation(Scalability; Flexiblility; Maintainability)

> All of these are for Economy.

---

# Technique consideration
* Security
* Integration methodology
* Performance

---

# Security

* How could I trust you?
* Cross boundary authorization

=> Widget token

---

# Integration methodology
* Widget assets downloading
* How to use widget API
  - How to tell it where to render
  - How to pass parameter to it
  - How to interact/communicate with it
* Isolation(CSS/JS variable)
* Frontend cares(SEO; responsibility; a11y;)
* Token management

---

# Performance

* Duplicate JavaScripts

---

# [@active/widget](http://ea-wiki.sp.k8sw.dev.activenetwork.com/en/arch/micro-frontend)

---

# active-widget

- Where to render
- Pass parameter
- Interaction
- Isolation
- Frontend cares

--- 

# WidgetLoader
- Widget assest downloading
- Performance(Cache/Module Federation)
- Remove __hard__ dependency

---

# Widget interface
  - How to integrate with <active-widget/>(For widget provider)

---

# EventBus
  - How to interact/communicate between widgets/clients

---

# WidgetContext
  - Pass parameter
  - Token management
