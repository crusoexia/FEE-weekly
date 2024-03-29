---
title: React 18 & 19 updates
theme: dracula
---

# Discussion

**Replace npm by corepack from node.js bundle**

![](./remove-npm.png)
<!-- .element: style="width: 70%;margin: 0 auto;" -->

----

## A Sound Input

https://github.com/nodejs/node/pull/51951#issuecomment-1975734926

----

> I'd like to **pose a much higher level technical question** before we get too into the weeds of "what package manager ships with node"
> 
> Here's the question
> 
> **"Should node.js ship with a package manager".**

Point out the root problem.
<!-- .element: class="fragment" data-fragment-index="1" -->

----

> ... it makes no sense to ship without the source code for a package manager **so that we are shipping a complete and useful tool out of the box**. ... **but synchronously and dynamically fetching a critical tool would make every single ci/cd flow slower** ...

Clear the design goals & purpose: A useful tool out of the box; Less setup, fast to go.
<!-- .element: class="fragment" data-fragment-index="1" -->

----

> 1. Does node.js desire to unbundle all package managers and only fetch package managers dynamically?
> 1. If fetching package managers dynamically do we want to have a blessed way to do so?
> 1. Are we ok shipping multiple package managers?
> 1. Can each package manager have a say in the architecture of how they are embedded and distributed in nodejs?
> 1. Do all package managers need to support a baseline set of features to ship with node.js?
> 1. What are the requirements of a package manager to ship with Node.js (this one is critical and I think extremely important to answer before landing anything to avoid endless future debate)
<!-- .element: style="font-size: 20pt" -->

Ask more architectural questions. Weight each decision by the Gain and the Cost; Whether it brings the team closer to the design Goals.
<!-- .element: class="fragment" data-fragment-index="1" -->

----

Architectural questions - A set of question around the design decisions, Usually the _Why_ questions that make the purpose to do so crystal clear.

---

# React New APIs

---

# React 18

----

## `useId`

----

> * Generating unique IDs for accessibility attributes
> * Generating IDs for several related elements
> * This hook is available in "Server Component".

----

```tsx
const inputId = useId();
```

Is equal to:
<!-- .element: class="fragment" data-fragment-index="1" -->

```tsx
import { uniqueId } from 'lodash';

const inputId = useMemo(() => uniqueId(), []);
```
<!-- .element: class="fragment" data-fragment-index="1" -->

**Is that true?**
<!-- .element: class="fragment" data-fragment-index="2" -->

----

_User Story:_ Generate unique id in SSR.

* [Demo](http://localhost:3000/samples/useId)
* [Explanation](https://react.dev/reference/react/useId#why-is-useid-better-than-an-incrementing-counter)

----

> **Caution**: Don't use `useId` to generate persistent purpose ids.

----

## `useTransition`

A React Hook that lets you update the state without blocking the UI.

----

* [Usage](https://react.dev/reference/react/useTransition#usage)
* [Bad case](http://localhost:3000/samples/useTransition)

----

## `useDeferredValue`

Just like using `lodash.debounce` with timeout `0`, _with less code_.

----

```jsx
const [ keyword, setKeyword ] = useState('');
const [ deferredKeyword, setDeferredKeyword ] = useState(keyword);

const deferChange = useMemo(() => {
  return debounce(0)(setDeferredKeyword);
});

const onKeywordChange = useCallback((e) => {
  setKeyword(e.target.value);
  deferChange(e.target.value);
});

useEffect(() => { dispatch(queryByKeywordAction(deferredKeyword)); }, [ deferredKeyword ]);
```
<!-- .element: style="font-size:14pt" -->


Equals to:
<!-- .element: class="fragment" data-fragment-index="1" -->

```jsx
const [ keyword, setKeyword ] = useState('');
const deferredKeyword = useDeferedValue(keyword);

const onKeywordChange = useCallback((e) => {
  setKeyword(e.target.value);
});

useEffect(() => { dispatch(queryByKeywordAction(deferredKeyword)); }, [ deferredKeyword ]);
```
<!-- .element: class="fragment" style="font-size:14pt" data-fragment-index="1" -->

----

* [Demo](https://react.dev/reference/react/useDeferredValue#examples)

----

### `useSyncExternalStore`

Provides a flexible way other than `redux`(or something else) to manage global state.

----

* [Usage](https://react.dev/reference/react/useSyncExternalStore)

---

# React Canary

Features that very possible to be available in _React 19_.

----

## Directives

Provide instructions to bundlers compatible with _React Server Components_.

----

* `'use client'` lets you mark what code runs on the client.
* `'use server'` marks server-side functions that can be called from client-side code.

----

['use server' Demo](https://localhost:3000/samples/directives)

----

## Actions
Mechanism and a set of APIs make state mutation management much easier.

----

* `useOptimistic` - [Demo](https://localhost:3000/samples/actions)
* `useFormStatus` - [Reference](https://react.dev/reference/react-dom/hooks/useFormStatus)
* `useFormState` - [Reference](https://react.dev/reference/react-dom/hooks/useFormState)

----

## Other notable updates

* Asset Loading
* React Compiler
