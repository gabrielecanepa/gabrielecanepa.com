/* eslint-disable */

var CACHE_NAME = 'gabrielecanepa.com_cache';

var resources = [
  '/',
  '/index.html',
  '/style.css',
  '/favicon/android-chrome-192x192.png',
  '/favicon/android-chrome-512x512.png',
  '/favicon/apple-touch-icon.png',
  '/favicon/browserconfig.xml',
  '/favicon/favicon-16x16.png',
  '/favicon/favicon-32x32.png',
  '/favicon/favicon.ico',
  '/favicon/mstile-144x144.png',
  '/favicon/mstile-150x150.png',
  '/favicon/mstile-310x150.png',
  '/favicon/mstile-310x310.png',
  '/favicon/mstile-70x70.png',
  '/favicon/safari-pinned-tab.svg',
  '/favicon/site.webmanifest',
  '/icons/liga.js',
  '/icons/selection.json',
  '/icons/style.css',
  '/icons/fonts/icomoon.eot',
  '/icons/fonts/icomoon.svg',
  '/icons/fonts/icomoon.ttf',
  '/icons/fonts/icomoon.woff',
  '/lib/github-calendar.min.css',
  '/lib/github-calendar.min.js',
  '/lib/tippy.min.js',
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(resources);
    })
  );
});
self.addEventListener('activate', function () {
  self.clients.claim();
});
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
