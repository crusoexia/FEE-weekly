---
title: Next.js in Production
theme: dracula
---

# Next.js in Production

First-Hand Experience

---

# next.js In Real Life

## Impressions after rewrite "activeworks-webui" by next.js for a month

---

# What had been done in one month?

----

* Passport integration
* Session management
* Routing
* Call internal (SOAP) services
* Tests
* CI and deployment
* Logging and Operation

---

# Impressions

* Start fast
* There are differences

---

# Facts

* Framework compiler

To reduce the complexity and gap between server & client components
(Like using server action; 'use cache' in experimental)

----

## Singleton

Would blow up your mind.

> First, during build, by default we use multiple workers. These are distinct child processes so unique copies of node that each load the module system and build some subset of pages. So for each worker spawned during the build you will see a copy of singleton initialization. We don't optimize for singletons because it would force us to use only 1 cpu core (JS is single-threaded) when for many machines more are available and thus builds can be faster if we parallelize.

> Second, cjs vs webpack module loading seems like a bug/misconfiguration. In the first trace the module is being loaded by node which means it was at some point treated as an external. The second trace shows the same module being loaded by webpack so it wasn't treated as an external. This might be because the module is being used in RSC and client and we intentionally fork these modules so you can have one implementation for RSC and one for the client. In the future we may actually render the RSC part in it's own process which again would force there to be two different module instances.

https://github.com/vercel/next.js/issues/65350

Singleton and global state should be avoid.

---

# Pros

---

## Isomorphic CAN reduce Duplication

* Auth management
* Reduce client-side API call and state management
* Routing on one side

----

## Rich Render Patterns

Fast First-Page-Rendering
Render Performance
A lot render best-practices

----

## Out of the Box

* Setup project fast
* Start development fast
* Setup deployment fast

---

# Cons

----

## Environment Diversity(or Pollution)

Same code(Server-Action etc.) might be used by: Browser, node and 
Edge server. Things goes worst for Testing which cannot leverage
next.js and react's new compiler to handle specific syntax.

----

## Complex

* More concepts
* More area need to be take care
* More mistakes
* Environment differences

----

## Framework intrusive

Inflexible

---

## Remarkable examples

---

# Major Aspects

You should understand to use `next.js` to build UI.

----

## Next.js Artifacts

* layout.js
* page.js
* RCC & RSC
* route.js
* middleware.js
* instrumentation.js

----

## Routing

File System Based Routing

----

## SSR & SSG

When and where will the rendering happens matter a lot.

----

How to contorl the render mode?

```typescript
// page.tsx

//...

export const dynamic = 'force-dynamic';

export const revalidate = 60;

//...
```

See more [route segments](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config).


----

## Runtime

* Browser
* node.js
* Edge

----

## RSC

Though the "React Server Component" ends with `.tsx`(or jsx), there is not much similarity
between the "Client Component":

* Only run on server just as an API which returns static html or JSON.
* No `life-cycle`; There is no `mount`, `unmount` or `update`; No state and effects.
* No interaction.
* It can directly call server side APIs without `fetch`.

----

## Authentication

----

## Session Management

----

## Application Life cycle

----

## Unit Test

* There is no difference to test `Client Component`.
* For RSC, it requires `node` test environment.
* `testing-library` is not designed for RSC. Use ReactDom server side render method instead.
* Generally it is easy to test the `Route Handlers` which accept a `Request` and return a `Response`.

---

# Conclusion

It feels like developing Asp.net, but more powerful.
