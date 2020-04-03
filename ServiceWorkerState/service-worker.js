const filesToCache = [
  //'../ServiceWorkerState/',
  //'../ServiceWorkerState/main.css'
  //'../ServiceWorkerState/index.html'
];

const staticCacheName = 'pages-cache-v1';

self.addEventListener('install', function(event) {
  /*
  console.log('[ServiceWorkerState] Install ****************************');

  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    })
  );
  */
});

self.addEventListener('fetch', event => {
  /*
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request);
      // TODO 4 - Add fetched files to the cache
    }).catch(error => {
      // TODO 6 - Respond with custom offline page

    })
  );
  */
});

var t=0;

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate ****************************');

  for (i = 0; i<1000; i++) {
    setTimeout(function(){ console.log('[ServiceWorker] ******', t ); t++; }, i*3000);
  }
});
