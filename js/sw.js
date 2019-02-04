//sw.js
/* Special thanks to Doug Brown for helping me get 
 *	unstuck with his walkthrough! 
 * 	https://www.youtube.com/watch?v=92dtrNU1GQc
 */

//Service Worker
self.addEventListener('install', (event) => {
	event.waitUntil(caches.open(cacheID).then(cache =>
		return cache
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
				'/js/dbhelper.js'
				])
			.catch(error => {
				console.log('Caches did not open: ' + error);
			})));
});