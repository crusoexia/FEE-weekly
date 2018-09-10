autoscale: true
build-lists: true
theme: Simple, 1

# The Progressive Web App

---

# [Background & History](https://en.wikipedia.org/wiki/Progressive_Web_Apps)

---

# What is PWA?

> Websites that can be installed to a device’s homescreen without an app store, along with other capabilities like working offline and receiving push notifications.

---

# The audits of PWA

* Network connection is secure
* User can be prompted to Add to Homescreen
* Installed web app will launch with custom splash screen
* App can load on offline/flaky connections
* Page load performance is fast
* Design is mobile-friendly
* Site is progressively enhanced[^1]
* Address bar matches brand colors

[^1]: A brief introduction of [Progressive enhancement](https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/)'s 3 layer design.

---

# An Example

> [ifixit](https://ifixit-pwa.appspot.com/)

---

# The Application Shell Architecture

> The app "shell" is the minimal HTML, CSS and JavaScript required to power the user interface and when cached offline can ensure **instant, reliably good performance** to users on repeat visits.[^2]

[^2]: [The App Shell Model](https://developers.google.com/web/fundamentals/architecture/app-shell).

---

# Manifest.json[^3]

[^3]: [The properties of Manifest.json](https://developer.mozilla.org/en-US/docs/Web/Manifest).

---

# Service Worker

* Install App shell
* Runtime Cache API calls
* Offline Mode
* [Push Notification](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)

---

# How to install a PWA to your device?

---

# Update The Old App[^4]

[^4]: [Displaying a new version available progressive web app](https://deanhume.com/displaying-a-new-version-available-progressive-web-app/).

---

# Limitations compare to Native App

---

# Tools

* Chrome dev tools
* [Lighthouse](https://developers.google.com/web/tools/lighthouse/)
* [Workbox](https://developers.google.com/web/tools/workbox/)
