//sw.js
/* Special thanks to Doug Brown for helping me get 
 *	unstuck with his walkthrough! 
 * 	https://www.youtube.com/watch?v=92dtrNU1GQc
 */

//Service Worker

//cache
self.addEventListener('install', (event) => {
	event.waitUntil(caches.open('v1').then(cache =>
		return cache(
			.addAll([
				'/',
				'/index.html',
				'/restaurant.html',
				'/css/smStyles.css',
				'/css/lgStyles.css',
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
				'/img/10.jpg'
				])
			.catch(error => {
				console.log('Caches did not open: ' + error);
			}))));
});

//fetch

self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			if (response) {
				return response;
				console.log('response received');
			}
			else {
				console.log('Err. event.request not found. Fetching.');
				return fetch(event.response);
			}
		}))
};