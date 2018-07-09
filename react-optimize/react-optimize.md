autoscale: true
build-lists: true

# React optimization

---

# React.createElement

* JSX

  ```jsx
  // jsx
  <div className="header">content</div>
  ```

* Output

  ```js
  // React.createElement
  { type: 'div', props: { className: 'header', children: [ 'content' ] } }
  ```

---

# Reconciliation

* Before update

  ```jsx
  // jsx
  <div className="header">content</div>
  ```

  ```js
  // React.createElement
  { type: 'div', props: { className: 'header', children: [ 'content' ] } }
  ```

* After update

  ```jsx
  // jsx
  <div className="header--fix">content</div>
  ```

  ```js
  // React.createElement
  { type: 'div', props: { className: 'header--fix', children: [ 'content' ] } }
  ```

---

# `children` property

* primitives - will be ignored
* String
* React components
* function

---

# Implementation 1

* Before update

  ```js
  {
    type: 'div',
    props: {
      className: 'App',
      children: [
        { type: 'h2' },
        { type: 'button' },
        { type: Table }
      ]
    }
  }
  ```

* After update

  ```js
  {
    type: 'div',
    props: {
      className: 'App',
      children: [
        { type: 'button' },
        { type: Table }
      ]
    }
  }
  ```

---

# Implementation 2

* Before update

  ```js
  {
    type: 'div',
    props: {
      className: 'App',
      children: [
        { type: 'h2' },
        { type: 'button' },
        { type: Table }
      ]
    }
  }
  ```

* After update

  ```js
  {
    type: 'div',
    props: {
      className: 'App',
      children: [
        false,
        { type: 'button' },
        { type: Table }
      ]
    }
  }
  ```

---

# Implementation 3

* Before update

  ```js
  {
    type: 'div',
    props: {
      className: 'App',
      children: [
        { type: 'h2', key: 'h2' },
        { type: 'button', key: 'button' },
        { type: Table, key: 'table' }
      ]
    }
  }
  ```

* After update

  ```js
  {
    type: 'div',
    props: {
      className: 'App',
      children: [
        { type: 'button', key: 'button' },
        { type: Table, key: 'table' }
      ]
    }
  }
  ```

