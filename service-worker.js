self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('soul-solitaire-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/src/index.css',
        '/src/index.js',
        // Add any other assets you want to cache
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});