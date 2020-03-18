addEventListener('install', (event) => {
    console.log('Hello from the service worker')
  });

addEventListener('fetch', (event) => {
    if (event.request.headers.get('Accept').includes('text/html')) {
        event.waitUntil(
            caches.open('offline').then((cache) => {
              cache.add('offline.html');
            })
          );
        event.respondWith(
          fetch(event.request).catch(() => caches.match('offline.html')),
        );
    }
});