self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('cache-v1').then(cache => cache.addAll([
      'data.txt',
    ])),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request)),
  );
});
