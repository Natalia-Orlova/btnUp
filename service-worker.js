const CACHE_NAME = 'y-cache';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/images/icon-192x192.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.match(event.request)
          .then(response => {
            return response || fetch(event.request);
          })
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => cacheName !== CACHE_NAME).map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

// self.addEventListener('appinstalled', () => {
//   // Скрыть кнопку после установки приложения
//   document.querySelector('.install-btn').style.display = 'none';
// });

self.addEventListener('appinstalled', () => {
  // Установить флаг, что приложение установлено
  localStorage.setItem('appInstalled', 'true');
  console.log('приложение установлено');
});