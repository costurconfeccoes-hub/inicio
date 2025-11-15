const CACHE_NAME = 'costurconfeccoes-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Instala o Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Intercepta as requisições
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna do cache ou faz a requisição
        return response || fetch(event.request);
      })
  );
});
