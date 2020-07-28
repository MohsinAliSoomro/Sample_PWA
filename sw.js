const CacheName ="hello-pwa";

const filesToCache=[
    '/',
    '/index.html',
    '/css/style.css',
    '/js/app.js'
];
//start service worker and cacha all the content
self.addEventListener('install',function(e){
    e.waitUntil(
        caches.open(CacheName).then(function(cache){
            return cache.addAll(filesToCache);
        })
    );
});
//serve cache content when offline
self.addEventListener('fetch',function(e){
    e.respondWith(
        caches.match(e.request).then(function(response){
            return response || fetch(e.request)
        })
    )
})
