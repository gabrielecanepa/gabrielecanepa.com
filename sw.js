/* eslint-disable */

var CACHE_NAME = 'gabrielecanepa_cache'

var resources = [
  '/',
  '/index.html',
  '/style.css',
  '/assets/fonts/style.css',
  '/assets/fonts/icomoon/icomoon.eot',
  '/assets/fonts/icomoon/icomoon.svg',
  '/assets/fonts/icomoon/icomoon.ttf',
  '/assets/fonts/icomoon/icomoon.woff',
  '/assets/fonts/ubuntu/ubuntu.woff2',
  '/assets/fonts/ubuntu/ubuntu.ext.woff2',
  '/assets/images/android-chrome-192x192.png',
  '/assets/images/android-chrome-512x512.png',
  '/assets/images/apple-touch-icon.png',
  '/assets/images/browserconfig.xml',
  '/assets/images/banner.png',
  '/assets/images/favicon-16x16.png',
  '/assets/images/favicon-32x32.png',
  '/assets/images/favicon.ico',
  '/assets/images/mstile-144x144.png',
  '/assets/images/mstile-150x150.png',
  '/assets/images/mstile-310x150.png',
  '/assets/images/mstile-310x310.png',
  '/assets/images/mstile-70x70.png',
  '/assets/images/safari-pinned-tab.svg',
  '/assets/images/site.webmanifest',
  '/assets/libs/github-calendar.min.css',
  '/assets/libs/github-calendar.min.js',
  '/assets/libs/tippy.min.js',
]

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      try {
        return cache.addAll(resources)
      } catch (e) {
        console.error(e)
      }
    }),
  )
})

self.addEventListener('activate', function () {
  self.clients.claim()
})

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request)
    }),
  )
})
