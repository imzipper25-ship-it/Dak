const CACHE_NAME = 'dak-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './main.js',
  './manifest.json',
  './public/images/dak_logo.png',
  './public/images/dak_mascot.png',
  './public/images/hero_bg.png',
  './public/images/concrete_work.png',
  './public/images/services_interior.png',
  './public/images/step_meeting.png',
  './public/images/step_budget.png',
  './public/images/step_handover.png'
];

// Install Service Worker and cache essential assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate Service Worker and clear old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch cached assets or request over network
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
