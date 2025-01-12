self.addEventListener('install', function(event) {
    console.log('Service Worker installed.');
});

self.addEventListener('fetch', function(event) {
    // キャッシュ機能が必要であればここで実装可能
});