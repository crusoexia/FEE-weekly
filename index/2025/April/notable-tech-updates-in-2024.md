---
theme: white
---

# Notable Tech Updates in 2024

---

# CSS

----

## 7 Revolutionary Features You Need to Know

[Reference](https://dev.to/mo-dev/css-just-changed-forever-7-revolutionary-features-you-need-to-know-4e5i?context=digest)

----

## CSS Nesting

[https://developer.chrome.com/docs/css-ui/css-nesting](https://developer.chrome.com/docs/css-ui/css-nesting)

----

## @scope

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@scope)

---

# JavaScript / TypeScript

----

## FireFox enables Temporal by default in v139

[spidermonkey.dev/blog](https://spidermonkey.dev/blog/2025/04/11/shipping-temporal.html)

[caniuse](https://caniuse.com/?search=temporal)

----

## Deno team started war with Oracle for JS trademark

----

## New runtimes and bundlers

* Bun
* Vite
* swc
* Rspack
* ...

----

## Array.at()

----

## Promise.withResolvers()

----

```JavaScript
let resolve, reject;
const promise = new Promise((resolver, rejector) => {
  resolve = resolver;
  reject = rejector;
});

// use promise, resolve and reject later
// ......
```

----

```JavaScript
const { promise, resolve, reject } = Promise.withResolvers();

// use promise, resolve and reject later
// ......
```

----

## TypeScript - Conditional Type

[Doc](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#handbook-content)

----

Example

```Typescript[1-5]
export const getAgencies = use<{ services: Services }>(
  logging,
  services,
)(
  async ({ services: { useCases } }) => {
    const session = await auth();

    return useCases.agencyList
      .getList({
        activeUserEpId: get('user.id')(session),
        activeUserEmail: get('user.email')(session),
      });
  },
);
```

----

```typescript
type MapToContext<M> = [M] extends [Middleware] 
    ? Parameters<Parameters<M>[0]>[0] 
    : never;

type MergeContext<U> = (
    U extends any ? (k: U) => void : never
  ) extends ((k: infer C) => void) ? C : never;

export const use = <Ms extends Middleware[]>(
  ...middlewares: Ms
) => <P extends unknown[], R>(
    api: (context: MergeContext<MapToContext<Ms[number]>>, ...params: P) => Promise<R>,
  ) => (
      ...params: P
    ) => {
//...
```
<!-- .element: style="font-size: 12pt" -->

----

With conditional type and type infer:

```Typescript
export const getAgencies = use(
  logging,
  services,
)(
  async ({ services: { useCases } }) => {
    const session = await auth();
    return useCases.agencyList
      .getList({
        //...
      });
  },
);
```

----

Extend learning: Function intersections

`(a: A) => void & (b: B) => void` would become `(p: A & B) => void`

----

## Bundled TypeScript declarations

[doc](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)

---

# React

----

## React 19

* `ref` without `forwardRef`
* `use`
* React Server Component
* Support `Custom Element`
* `Context` as Provider

----

## next.js middleware only in node runtime

[Config middleware runtime](https://nextjs.org/docs/app/building-your-application/routing/middleware#runtime)

---

# Node.js

----

<!-- .element: data-background="./images/nodejs.jpg" -->

## Node.js had got an official mascot

----

## node.js v22 become LTS

----

## **Corepack** was voted to stop distributing with Node.js since v25.

[Reference](https://socket.dev/blog/node-js-tsc-votes-to-stop-distributing-corepack)

----

Why is this decision made?

----

What can be learned from this story?

Keep things simple usually means keep life simple.

----

## Node.js now support TypeScript

Syntax stripping only.

Extends: Can we run TypeScript program directly with node? -> It depends.

---

# Other(Tools)

----

<!-- .slide: data-background="center / contain no-repeat url(./images/projects-tier.png)" -->

----

## Module Federation v2.0 become function independently of webpack

[Module Federation.io](https://module-federation.io/)

----

## Renovate

Automated dependency update tool.

* Delivers update PRs
* Provides useful information to help decide which updates to accept (age, adoption, pass rates, merge confidence)
* Highly configurable and flexible.

----

```json
{
  "packageRules": [
    {
      "matchUpdateTypes": ["minor", "patch", "pin", "digest"],
      "automerge": true
    },
    {
      "matchDepTypes": ["devDependencies"],
      "automerge": true
    }
  ]
}
```

----

```json
{
  "packageRules": [
    {
      "matchCurrentVersion": "^2",
      "matchDatasources": [
        "npm"
      ],
      "matchPackageNames": [
        "airbnb-prop-types"
      ],
      "replacementName": "prop-types-tools",
      "replacementVersion": "2.17.0"
    }
  ]
}
```
