/* TODO: Implement caching strategy */

self.addEventListener('install', event => {
  console.log('[SW] Service Worker installing')
})

self.addEventListener('activate', event => {
  console.log('[SW] Service Worker activated')
})
