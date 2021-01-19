
self.addEventListener('install', evt=>{
    console.log(evt);
})
self.addEventListener('activate', evt=>{
    console.log(evt);
})

self.addEventListener('fetch', evt=>{
    if (!navigator.onLine){
        evt.respondWith( new Response('pas de connexion internet'))
    }
    console.log(evt.request.url);
})
