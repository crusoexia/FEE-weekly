---
title: Build a Theming system with modern CSS features
theme: dracula
---

## Build a Theming system with modern CSS features

----

Outline

* Why build a theming system that can dynamically swap themes?
* The modern CSS features that power the system.
* Insights from the implementation.
* Upcoming CSS features that will change how we theme.

---

## Why build a theming system?

----

In our stack we have **CUI**, **AUI**, and **widgets**.

**Question**: How does widgets keep only one implementantion to support both AUI applications and CUIs?

----

**Goal**: a system that can *swap CUI and AUI style dynamically*.

----

> A theme is a set of design tokens that can drastically change elements' look and
> feel without changing their layouts, functions or interactions.

----

## Eliminate Sass

And PostCSS, or any other CSS pre-processors or frameworks.

Being able to dynamically swap widgets' styles is the **critical design
consideration**. Any technique that requires pre-build process is eliminated.

----

## Eliminate JSON + JavaScript

* Complicated to implement, translate and apply.
* Introduces UI framework compatibility issues.
* Involving JavaScript increases the attacking surface.

----

The technique that makes it easy to create and apply themes is CSS itself.

```html
<link href="https://corp.com/default-style.css" rel="stylesheet" />
<link href="https://corp.com/brand-cui.css" rel="stylesheet" />
<!-- <link href="https://corp.com/brand-aui.css" rel="stylesheet" /> -->
```

<ul style="font-size: 18pt">
 <li><code>default-style.css</code>: Style skeletons with default tokens.</li>
 <li><code>brand-cui.css</code> & <code>brand-aui.css</code>: Theme files with precise tokens.</li>
</div>


---

## Modern CSS features for theming

* Custom properties (design token carrier)
* Native CSS functions (runtime calculations)

----

## Custom properties

Custom properties are ideal for carrying design tokens.

```css
:root {
  --color-brand: #2668ff;
  --color-brand-shades-32: #1a47ad;
  --color-brand-shades-20: #1e53cc;
  --color-brand-shades-12: #215ce0;
  --color-brand-tints-20: #5186ff;
  --color-brand-tints-80: #d3e0ff;
  --color-brand-tints-88: #e5edff;
}
```

----

Difference from Sass variables (runtime vs build-time).

```scss
.input {
  --addon-size: 40px;
  $addon-size: 40px;

  .input-addon {
    width: var(--addon-size);
    width: $addon-size;
  }
}
```

----

Scopes: global theme vs component-level overrides.

```css
:root {
  --form-control-sm-height: 28px
}

.form-control {
  --form-control-sm-height: 32px
}

.input.input-sm {
  --border-width: 2px;

  /* What's the result of the height? */
  height: calc(var(--form-control-sm-height) + var(--border-width));
}
```

----

## Native CSS functions

For operating `Custom properties`.

> Don't mix Sass functions with custom properties, it will causes build errors.

----

Regular used functions: `calc`, `color-mix`.

----

[calc](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/calc)

```css
padding: calc(var(--offset) + 8px);
padding: calc((var(--offset) + 8px) / 2);
```

```css
/* The number unit matters. */

padding: calc(0 + 8px); /** 0 **/
padding: calc(0px + 8px); /** 8px **/
```

----

[color-mix](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix)

```css
/* CSS */
color: color-mix(in srgb, var(--brand-primary), white 20%);
color: color-mix(in srgb, var(--brand-primary), black 20%);
color: color-mix(in srgb, var(--brand-primary) 70%, transparent);
```

```scss
// scss
color: lighten($brand-primary, 20%);
color: darken($brand-primary, 20%);
color: rgba($brand-primary, 0.7);
```

----

Other useful native functions: `min`, `max`, `minmax`.

----

## Advanced: conditional control & feature toggles

Using a custom property as a 0/1 switch for creating conditional styles directly in CSS

----

```css
.button {
  --default-radius: 6px;
  --is-round-border: 0;

  border-radius: calc(
    (1 - var(--is-round-border)) * var(--default-radius) 
    + var(--is-round-border) * 999em
  );
}

.button.button-pill {
  --is-round-border: 1;
}
```

----

## Other features that make theming easier

* `color-scheme` for light/dark integration with the UA.
* `light-dark()` for automatic color selection.

[Example](https://codepen.io/crusoexia/pen/PwzQKWm)

----

### Advanced: Do CSS functions hurt rendering performance?


----

<!-- .slide: style="font-size:22pt" -->

The short answer is: **yes**, **but usually not in a way that you'd notice**.
For most applications, **no**. Modern browser engines are incredibly optimized for this.

* **The cost is minimal**: The computation for a single calc() is trivial for a modern CPU. The real cost comes from applying that change to thousands of elements at once.
* **It's often faster than JavaScript**: The alternative is using JavaScript to read a value, do math, and apply it to an element's style property. This is almost always slower because it involves crossing the boundary between the browser's rendering engine and the JS engine, and it can force less-optimized style updates.
* **Layout-only properties are cheaper**: Changing properties like color or background-color only triggers a "paint" step, which is much faster than a full "layout" step. Properties like width, margin, or font-size are more expensive as they trigger layout changes.

----

## Insights: prefer CSS class composition over Sass mixins

----

Abuse `mixin` will cause *hard to reason about* definitions, style conflicts
and massive bundle size.

```html
<button class="btn"></button>
<button class="btn-dropdown"></button>
<button class="icon-btn"></button>
<button class="icon-btn-dropdown"></button>

<!-- Versus -->

<button class="btn"></button>
<button class="btn dropdown-trigger"></button>
<button class="icon-btn"></button>
<button class="icon-btn dropdown-trigger"></button>
```

----

Follow [SMACSS](https://smacss.com/) to build scalable and modular CSS architecture.

---

# CSS trends

Game-changer features for authoring and theming.

----

* `@when` / `if()` - [style conditional rules](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/if)
* `@function` / `@property` [for custom APIs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@function)
* [CSS nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Nesting)
* `mixin`

----

Native CSS will gradually replace many use cases of preprocessors and utility frameworks like Sass.
