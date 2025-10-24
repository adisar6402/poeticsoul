// service-worker.js
const CACHE_NAME = "poetic-soul-v2";
const OFFLINE_URL = "/index.html";

// Core assets to pre-cache
const CORE_ASSETS = [
  "/",
  "/index.html",
  "/favicon.ico",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/apple-touch-icon.png",
  "/site.webmanifest"
];

// Install: pre-cache core assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("💾 Caching core assets");
      return cache.addAll(CORE_ASSETS);
    })
  );
  self.skipWaiting(); // Activate immediately
});

// Activate: clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim(); // Take control of open pages
});

// Fetch: serve cached content when offline
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Only handle GET requests
  if (request.method !== "GET") return;

  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request)
        .then((response) => {
          // Update cache with latest version (for same-origin requests)
          if (
            response &&
            response.status === 200 &&
            response.type === "basic" &&
            request.url.startsWith(self.location.origin)
          ) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => cached || caches.match(OFFLINE_URL)); // Fallback offline
      return cached || fetchPromise;
    })
  );
});