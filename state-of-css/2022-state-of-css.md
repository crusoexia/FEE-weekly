theme: Franziska, 9

# 2022 State Of CSS

---

# [The Result](https://2022.stateofcss.com/en-US/)

---

# content-visibility
### [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility) [caniuse](https://caniuse.com/?search=content-visibility)

* (when set to `auto`) It enables the user agent to skip an element's rendering work (including layout and painting) until it is needed — which makes the initial page load much faster.

---

# subgrid
### [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid) [caniuse](https://caniuse.com/?search=subgrid)

* Makes the nested `grid` uses the tracks defined on the parent, thus nested children can easily lined up with parent grid items.
* [Example](https://codepen.io/crusoexia/pen/abjBVLo?editors=1100)

---

# :is() & :where()

Compact form to apply style to large selectors.

* `:is()` [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:is) [caniuse](https://caniuse.com/?search=%3Ais)
* `:where()` [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:where) [caniuse](https://caniuse.com/?search=%3Awhere)
* Difference
  - `:is()` takes on the specificity of the most specific selector in its arguments; whereas `:where()` takes 0 specificity
* [Example](https://codepen.io/crusoexia/pen/ExpyXOZ?editors=1100)

---

# :has() 
### [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) [caniuse](https://caniuse.com/?search=%3Ahas)

* Parent selector.
* It has the same arguments as `is()` and `not()`.
* Cannot nest.
* [Example](https://codepen.io/crusoexia/pen/VwBjWYP?editors=1100)

---

# [Accessibility features](https://2022.stateofcss.com/en-US/features/accessibility/)

* Features arround the user-preference to provide different styles to improve the accessibility.

---

# :focus-visible
### [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) [caniuse](https://caniuse.com/?search=%3Afocus-visible)

* To provide a different focus indicator based on the user's input modality (mouse vs. keyboard).

---

# Flexbox gap
### [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gap) [caniuse](https://caniuse.com/?search=flexbox%20gap)

* Shorthand for `row-gap` and `column-gap`.
* Can be used for `flexbox`, `grid` and `multi-column`.
* [Example](https://codepen.io/crusoexia/pen/oNMLWmb?editors=1100)

---

# Control The Shadow

* Why? [An Explainer](https://github.com/fergald/docs/blob/master/explainers/css-shadow-parts-1.md)
* `:host()`
* `:host-context()`
* The `part` attribute and the `::part()` pseudo-element.

---

# :host()
### [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:host_function) [caniuse](https://caniuse.com/?search=%3Ahost)

* Select the `Shadow DOM`'s __host element__ from within `Shadow DOM`, with matched criteria.
* Why does it matters?
  - Provide an easy way to style the shadow host.
  - Allow theme the webcomponent by conditions.
* [Example](https://codepen.io/crusoexia/pen/rNrLPav?editors=1010)

---

# :host-context()
### [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:host-context) [caniuse](https://caniuse.com/?search=%3Ahost-context)

* Similar as `:host`
* Instead of match the criteria of the host itself, but match the criteria of host's parent.
* You cannot use this pseudo-class to style the host element.
* [Example](https://codepen.io/crusoexia/pen/XWBKOBO?editors=1010)

---

# ::part()
### [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::part) [caniuse](https://caniuse.com/?search=%3A%3Apart)

* Allow user to customize the certain part of the shadow tree from outside.
* It will pierce the shadow.
* [Example](https://codepen.io/crusoexia/pen/JjBKzNK)
