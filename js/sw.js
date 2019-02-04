//sw.js
/* Special thanks to Doug Brown for helping me get 
 *	unstuck with his walkthrough! 
 * 	https://www.youtube.com/watch?v=92dtrNU1GQc
 */
 
//Service Worker
self.addEventListener('install', (event) => {
	event.waitUntil(caches.open(cacheID).then)
});