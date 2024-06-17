const CACHE_NAME = "my-cache";
const urlsToCache = [
  "https://natalia-orlova.github.io/btnUp/",
  // "https://natalia-orlova.github.io/btnUp/index.html",
  // "https://natalia-orlova.github.io/btnUp/style.css",
  // "https://natalia-orlova.github.io/btnUp/script.js",
  "https://natalia-orlova.github.io/btnUp/images/icon-192x192.png",
];

// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open("my-cache").then((cache) => {
//       console.log("Opened cache");
//       return cache.addAll([
//         '/',
//         '/style.css',
//         '/script.js',
//         // Другие URL ресурсов
//       ]);
//     })
//   );
// });

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache-name').then(function(cache) {
      return Promise.all([
        '/',
        '/style.css',
        '/script.js',
        // Другие URL ресурсов
      ].map(function(url) {
        return fetch(url).then(function(response) {
          if (response.ok) {
            return cache.add(url);
          } else {
            console.error('Failed to fetch resource:', url);
            return Promise.reject(new Error('Request failed'));
          }
        });
      }));
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== "my-cache") {
            return caches.delete(name);
          }
        })
      );
    })
  );
});

self.addEventListener("appinstalled", () => {
  // Скрыть кнопку после установки приложения
  document.querySelector(".install-btn").style.display = "none";
});

// self.addEventListener("beforeinstallprompt", (event) => {
//   event.preventDefault();
//   localStorage.setItem("appInstallCancelled", "true");
// });
