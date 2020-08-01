autoscale: true
build-lists: true
theme: Business Class, 5

# LSP & DIP

---

# LSP

* Sub type should be able to replace its base type in anywhere any situation.

---

> The sub type should pass all the acceptance criteras of base type.

---

# Why?

* Polymophism
* OCP

---

# An example: Rectangle & Square

---

![inline 100%](./basic.png)

---

# Problem

![inline 100%](./problem.png)

---

```typescript
class Square extends Rectangle {
  setHeight(height) {
    this.height = height;
    this.width = width;
  }

  setWidth(width) {
    this.setHeight(width);
  }
}
```

---

# Critical

![inline 100%](./critical.png)

---

```typescript
function test(rectangle: Rectangle) {
  rectangle.setHeight(5);
  rectangle.setWidth(4);
  expect(rectangle.getArea).toEqual(20);
}
```

---

# Don't use inherit, use implement.

---

# DIP

* Implementation should depends on Policy.
* Details should depends on Abstraction.

---

# A tale of three-tiers

---

![inline 100%](./tale_of_three_tiers.png)

---

# Tier is everywhere

![inline 100%](./tier_is_everywhere.png)

---

# DIP approach

![inline 100%](./DIP_approach.png)
