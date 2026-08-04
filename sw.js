const CACHE_NAME = 'edurobot-v38';
const ASSET_EXTENSIONS = ['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.mp3', '.wav', '.json'];

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
        keys.map(k => {
            if (k !== CACHE_NAME) {
                return caches.delete(k); // Xoá cache cũ (edurobot-v1)
            }
        })
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);
  
  // Chỉ xử lý GET request nội bộ
  if (url.origin !== self.location.origin) return;
  if (req.method !== 'GET') return;

  const isAsset = ASSET_EXTENSIONS.some(ext => url.pathname.endsWith(ext));
  if (!isAsset) return;

  // Pattern: Stale-While-Revalidate
  // Phản hồi siêu tốc bằng cache hiện tại, sau đó âm thầm cập nhật cache mới từ server
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(req).then(cachedResponse => {
        const fetchPromise = fetch(req).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            cache.put(req, networkResponse.clone());
          }
          return networkResponse;
        }).catch(err => {
          console.warn('Offline hoặc lỗi mạng:', req.url);
          throw err;
        });

        return cachedResponse || fetchPromise;
      });
    })
  );
});
