//sw.js
/* Special Thanks to:
	developers.google.com & matthewcranford.com!
*/

//Service Worker
	const cacheName = 'cache1';
	const cacheList = [
				'/',
				'/index.html',
				'/restaurant.html',
				'/css/styles.css',
				'/js/main.js',
				'/js/restaurant_info.js',
				'/js/review.js',
				'/js/sw.js',
				'/js/dbhelper.js',
				'/img/1.jpg',
				'/img/2.jpg',
				'/img/3.jpg',
				'/img/4.jpg',
				'/img/5.jpg',
				'/img/6.jpg',
				'/img/7.jpg',
				'/img/8.jpg',
				'/img/9.jpg',
				'/img/10.jpg'];

//Registration
//https://developers.google.com/web/fundamentals/primers/service-workers/registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js');
    console.log('SW registered');
  })
} else {
	(error) => {
		console.log('SW registration failed: ' + error);
	}
};


//install cache
self.addEventListener('install', (event) => {
	event.waitUntil(caches.open('cache1')
		.then(cache => {
				return cache.addAll(cacheList)
				.catch(error => {
				console.log('Caches did not open: ' + error);
			});
	}));
});


//fetch cache
self.addEventListener('fetch', (event) => {
	    e.respondWith(
        caches.match(e.request).then(function(response) {

            if (response) {
                return response;
            }

            else {
                return fetch(e.request)
                    .then(function(response) {
                        const responseClone = response.clone();
                        caches.open(cacheName).then(function(cache) {
                            cache.put(e.request, responseClone);
                        })
                        return response;
                    })
                    .catch(function(err) {
                        console.error(err);
                    });
            }         
        })
    );
});
