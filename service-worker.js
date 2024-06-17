const CACHE_NAME = "my-cache";
const urlsToCache = [
  // "https://natalia-orlova.github.io/btnUp/",
  "https://natalia-orlova.github.io/btnUp/index.html",
  "https://natalia-orlova.github.io/btnUp/style.css",
  "https://natalia-orlova.github.io/btnUp/script.js",
  "https://natalia-orlova.github.io/btnUp/images/icon-192x192.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("my-cache").then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
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
