const CACHE_NAME = 'costurconfeccoes-v1';
const urlsToCache = [
  '/inicio/',
  '/inicio/index.html',
  '/inicio/manifest.json',
  '/Cliente/',
  '/clientenalecrim/',
  '/clientenartdesigner/',
  '/collab/',
  '/areadocolaborador/',
  '/notadecobranca/',
  '/Agendamento/',
  '/cadastrodeclientes/',
  '/calculadordemedidas/',
  '/calculodeapoioartdesigner/',
  
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
