autoscale: true
build-lists: true

# Service worker in action

---

# [Application shell architecture](https://developers.google.com/web/fundamentals/architecture/app-shell)

---

# Service worker

* It is web worker
* [client control](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#scope_and_control)
* Cache storage and fetch
* Security - only available on localhost or via https

---

# Life circle

* register -> install -> [wait] -> activate

---

# Register

---

# Install

---

# Activate

---

# Update service worker

* When browser detect there is a single byte different between the new and old one.
* Install the new one
* wait for the old one finish it's work
  
  ```js
  // Can skip the waiting by 
  self.skipWaiting()
  ```

* Tips: don't let the browser cache your service worker file

---

# Tools

---

# Precache application shell with [sw-precache](https://github.com/GoogleChromeLabs/sw-precache)

---

# Runtime cache API response with [sw-toolbox](https://github.com/GoogleChromeLabs/sw-toolbox)

---

# [workbox](https://developers.google.com/web/tools/workbox/)

---

# Thanks for your attention!
