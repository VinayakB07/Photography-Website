'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "26e3f4caf02e134ec38641573935e699",
"assets/AssetManifest.bin.json": "3d51af7ee85286064b27a5dff11ada77",
"assets/AssetManifest.json": "2b5e20731e3240c8e687c1be699950fc",
"assets/assets/fonts/Manrope-VariableFont_wght.ttf": "cf98436d65175c509540014c3189fbc6",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Praise-Regular.ttf": "fdbbad7d3c4ebc06d23c9cc572317342",
"assets/assets/fonts/Questrial-Regular.ttf": "74a3a9121f919fdb9e61ee96b545ed1e",
"assets/assets/fonts/RedRose-VariableFont_wght.ttf": "ceb9b3072a2898311560353903b2cb35",
"assets/assets/images/action-camera_3707604%25201.png": "dff01ee38318ba05ecf583bad2035b5c",
"assets/assets/images/black-camera-lens-brown-wooden-table%25201.png": "df6913f238424c3f9644ff4efbd62716",
"assets/assets/images/event.jpg": "723a889b35d37aec66a19d177a3e59b7",
"assets/assets/images/fasion.jpeg": "08e9be4a53d4949227bb89e89cb0e937",
"assets/assets/images/film-editing_3211366%25201.png": "69cb994fe7469408d649fd3aa79ebba5",
"assets/assets/images/fineArt.jpg": "9425ab762cf4404e78c937c1548244af",
"assets/assets/images/Grid%2520layers%2520-%2520v2.png": "b664b38338a3ff3d5c7dd3bee2125e82",
"assets/assets/images/Icon.png": "51ac5d457ab69742cdabbc82b3909003",
"assets/assets/images/Rectangle%2520100.png": "e688f918ac9a8bf02816877050b02614",
"assets/assets/images/Rectangle%2520101.png": "01d04ca1c60a3b7a3a10ce3fabeb9779",
"assets/assets/images/Rectangle%2520104%2520(1).png": "727d6abf8794cc09c79cac2eb358c640",
"assets/assets/images/Rectangle%2520104.png": "236e3c36680a8adb1b2b404f37c5c356",
"assets/assets/images/Rectangle%2520105.png": "e278638a05e4963cc396ae23497fe992",
"assets/assets/images/Rectangle%2520106.png": "53db348e3278b0bb1f3aaedc294a121b",
"assets/assets/images/Rectangle%2520107.png": "e086c33c6ecaac1f0f42da734eca2ee3",
"assets/assets/images/Rectangle%2520109.png": "69c59062102f0afbea4bdd1522820b05",
"assets/assets/images/Rectangle%2520110.png": "e6ce2a500cb4e0e743ae19166d9874c7",
"assets/assets/images/Rectangle%2520111.png": "0a9828318468b270d8e529b2feb72cd9",
"assets/assets/images/Rectangle%2520112.png": "dd8cae689692da76dce373096c8136ad",
"assets/assets/images/Rectangle%252021.png": "99ff9cad91561a82aae66d578d2ec187",
"assets/assets/images/Rectangle%25203.png": "b89e4946fcbbaaeae15b9eff7e8c98ca",
"assets/assets/images/Rectangle%252042.png": "8f20153d0b40037eec5e85343505729b",
"assets/assets/images/Rectangle%252097.png": "87712796335e62317685ed70ff351387",
"assets/assets/images/Rectangle%252098.png": "7cc991e1a49b0e83b2d2194fbf1c4813",
"assets/assets/images/Rectangle%252099.png": "ed4485e9c309d1ed23be1c5666b1fce7",
"assets/assets/images/shutter_10629115%25201.png": "ca44e953028a79dd75f511731927a992",
"assets/assets/images/Sub%2520Container.png": "618e047b920e7486b389bf8a5912041f",
"assets/assets/images/team_lumix_front%255B1%255D%25201.png": "b208af16de12ee81077d82aba319710e",
"assets/assets/images/team_lumix_front%255B1%255D%25202.png": "6df150a6efff06f660ab0c420f4a201e",
"assets/assets/images/Vector%2520(1).png": "1b32eb98ac1bc34a6f727045a9aabc2f",
"assets/assets/images/Vector%2520(2).png": "d1224a97c9d91cc0189a5906f5dc6898",
"assets/assets/images/Vector%2520(3).png": "53211d916df7b6f3a56d372541fec810",
"assets/assets/images/Vector%2520431%2520(Stroke).png": "ab67cecf1089a4470cb6ae493e16b5e1",
"assets/assets/images/Vector.png": "2771bc8d6a0a5d6c2901861d826f78f6",
"assets/assets/images/view-electronic-product-balancing-podium%25201.png": "8bed118466b5d42be35e41eaf622787d",
"assets/assets/images/wedding.jpg": "8c6305c7e9f1c371ac6c2524d6ff3c52",
"assets/FontManifest.json": "6e61264051294f497315539c48eb7087",
"assets/fonts/MaterialIcons-Regular.otf": "cd8fe2f6b41ef688e6ae0b9dc6f0a725",
"assets/NOTICES": "c977dbdded360dff98d0a1922e761d1b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "778dd06574baf395f990411d6831a19a",
"/": "778dd06574baf395f990411d6831a19a",
"main.dart.js": "5666895d863bceb54494445bd9f5160b",
"manifest.json": "29a38ef5ddcb868536214e9b8cc91cb7",
"version.json": "b951753c040ef506143ac34d903e86d6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
