/* eslint-disable no-restricted-globals */
self.addEventListener("install", event => {
  console.log("[Service Worker] Installing Service Worker ...", event);
  event.waitUntil(
    caches.open("static").then(cache => {
      cache.addAll(["/"]);
    })
  );
});

self.addEventListener("activate", event => {
  console.log("[Service Worker] Activating Service Worker ...", event);
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      } else {
        return fetch(event.request).then(res => {
          return caches.open("dynamic").then(cache => {
            cache.put(event.request.url, res.clone());
            return res;
          });
        });
      }
    })
  );
});
