/* eslint-disable no-restricted-globals */

var CACHE_STATIC_NAME = "static-v20";
var CACHE_DYNAMIC_NAME = "dynamic";

self.addEventListener("install", event => {
  console.log("[Service Worker] Installing Service Worker ...", event);
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then(cache => {
      cache.addAll(["/", "/offline"]);
    })
  );
});

self.addEventListener("activate", event => {
  console.log("[Service Worker] Activating Service Worker ...", event);
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            console.log("[Service Worker] Removing old cache: ", key);
            return caches.delete(key);
          } else {
            return null;
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      } else {
        return fetch(event.request)
          .then(res => {
            return caches.open(CACHE_DYNAMIC_NAME).then(cache => {
              cache.put(event.request.url, res.clone());
              return res;
            });
          })
          .catch(error => {
            return caches.open(CACHE_STATIC_NAME).then(cache => {
              console.log("[Service Worker] Error: ", error);
              return cache.match("/offline");
            });
          });
      }
    })
  );
});

// NETWORK WITH CACHE FALLBACK
// self.addEventListener("fetch", event => {
//   event.respondWith(
//     fetch(event.request)
//       .then(res => {
//         return caches.open(CACHE_DYNAMIC_NAME).then(cache => {
//           cache.put(event.request.url, res.clone());
//           return res;
//         });
//       })
//       .catch(error => {
//         console.log("[Service Worker] Error: ", error);
//         return caches.match(event.request);
//       })
//   );
// });

// // CACHE THEN NETWORK WITH OFFLINE SUPPORT
// self.addEventListener("fetch", event => {
//   var url = "https://pokeapi.co";
//   // If contains string
//   if (event.request.url.indexOf(url) > -1) {
//     event.respondWith(
//       caches.open(CACHE_DYNAMIC_NAME).then(cache => {
//         return fetch(event.request).then(res => {
//           cache.put(event.request, res.clone());
//           return res;
//         });
//       })
//     );
//   } else {
//     // Wrap it in respond with otherwise it wouldnt return
//     event.respondWith(
//       caches.match(event.request).then(response => {
//         if (response) {
//           return response;
//         } else {
//           return fetch(event.request)
//             .then(res => {
//               return caches.open(CACHE_DYNAMIC_NAME).then(cache => {
//                 cache.put(event.request.url, res.clone());
//                 return res;
//               });
//             })
//             .catch(() => {
//               return caches.open(CACHE_STATIC_NAME).then(function (cache) {
//                 return cache.match("/offline");
//               });
//             });
//         }
//       })
//     );
//   }
// });

// self.addEventListener("fetch", event => {
//   event.respondWith(
//     caches.open(CACHE_DYNAMIC_NAME).then(cache => {
//       return fetch(event.request).then(res => {
//         cache.put(event.request, res.clone());
//         return res;
//       });
//     })
//   );
// });

// CACHE THEN NETWORK FALLBACK
// self.addEventListener("fetch", event => {
//   event.respondWith(
//     caches.match(event.request).then(response => {
//       if (response) {
//         return response;
//       } else {
//         return fetch(event.request)
//           .then(res => {
//             return caches.open(CACHE_DYNAMIC_NAME).then(cache => {
//               cache.put(event.request.url, res.clone());
//               return res;
//             });
//           })
//           .catch(() => {
//             return caches.open(CACHE_STATIC_NAME).then(function (cache) {
//               return cache.match("/offline");
//             });
//           });
//       }
//     })
//   );
// });

// Cache only
// self.addEventListener("fetch", event => {
//   event.respondWith(
//     caches.match(event.request).then(response => {
//       return response;
//     })
//   );
// });

// Network only
// self.addEventListener("fetch", event => {
//   event.respondWith(fetch(event.request));
// });
