theme: Libre, 6
footer: Independency & Boundary
slidenumbers: true
build-lists: true

# Independency & Boundaries

---

# Independency

---

# Why does it matter?
* Operation
* Deployment
* Development[^1]

[^1]: activewebui for example.

---

# Conway's law
> Any organization that designs a system will produce a design whose structure is a copy of the organization's communication structure.[^2]

[^2]: Previous anet and aw.

---

# Decoupling modes
* Source level
* Deployment level
* Service level

---

# How to?

---

# Bounaries
* Boundary is draw lines. These line separate software elements from one another, and restrict those on one side to knowing about those on the other.

---

![inline](./boundary-explaination.png)

---

[.column]
Micro perspective

* function
* class
* file
* dir

[.column]
Macro perspective

* package / artifacts
* service

---

# Purpose
* Separation of concern
* OCP/CCP/CRP
* Protect core from affect by details
* Leave options open

---

# Leave options open

---

# Recall the goal of architect:
* Minimize the human resources required to build and maintain the required system.

---

# What it is the most human resources consuming?
* Coupling, especially coupling to the premature decisions.

---

# Premature decisions
The things that nothing to do with the business requirement:

* Database
* Frameworks[^3]
* Utility libraries[^4]

[^3]: arch-html, backbone, react.

[^4]: momentjs

---

# Decoupling details
* Defer the details decision at the latest possible moment.
* Let migration details become possible.

---

![inline](./boundary.png)

---

# How to coding the core without the details?
* Stub, mock, interfaces.

---

![inline](./redux-modal.png)

---

![inline](./redux-boundary.png)
