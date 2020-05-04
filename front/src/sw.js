const CACHE = 'static';
const timeout = 400;
const url = self.__precacheManifest.map(e => e.url);

self.addEventListener('install', event => 
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(url)))
);

// При запросе на сервер мы используем данные из кэша и только после идем на сервер.
self.addEventListener('fetch', (event) => {
  if (event.request.url.startsWith("chrome-extension")) {
    return;
  }

  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(fromNetwork(event.request, timeout)
    .then(async (response) => {
      const open = await caches.open(CACHE);
      await open.put(event.request, response.clone());
      return response;
    })
    .catch((err) => {
      console.log(err);
      return fromCache(event.request)
      .then((response) => {
        setTimeout(() => update(event.request), 0);
        return response;
      })
      .catch((e) => {
        console.log("данных в кеше не обнаружено");
        return update(event.request);
      })
    })
  );
});

function fromCache(request) {
  return caches.open(CACHE).then((cache) =>
    cache.match(request).then((matching) =>
      matching || Promise.reject('no-match')
    ));
}

function fromNetwork(request, timeout) {
  return new Promise((fulfill, reject) => {
    const timeoutId = setTimeout(reject, timeout);
    fetch(request).then((response) => {
      clearTimeout(timeoutId);
      fulfill(response);
    }, reject);
  });
}

async function update(request) {
  try {
    const open = await caches.open(CACHE);
    const data = await fetch(request);
    await open.put(request, data.clone());
    return data;
  } catch (error) {
    console.error(error);
    return;
  }

}