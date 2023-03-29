theme: Plex, 1
autoscale: true

# Nextjs streaming SSR and React18 server component

* [Server Component](https://react.dev/reference/react-dom/server)
* Static Rendering
* Data Fetching
* Cache, Runtime Resources and Dynamic Rendering
* [Suspense](https://react.dev/reference/react/Suspense) & [Streaming SSR](https://www.patterns.dev/posts/streaming-ssr)
* Cannot have React State & Event handler, in general it is not interactiveble
* CC(Client Component) use SC(Server Component)
* Share data

---

# There should be a clear Boundary between SC and CC.

* SC runs in the server side, can directly access the internal network, file system and data storage. 
* SC can use the nodejs specific API.
* SC should concern the session problem(even stateless), should treat the cache very carefully.
* SC can use CC directly while CC cannot.
* SC doesn't have React State.
* CC runs in the browser, can have React State and interactiveble.

---

# Conclusion

* Just like working with ASP.net/JSP.net/PHP on the server side but using nodejs and React.
* There is not big difference on the client side as classic SPA, but need to pay attention when using the Server Component.
