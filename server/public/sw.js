importScripts("/precache-manifest.14545a6c22897b10ff422b56b3795546.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

const CACHE = 'static';
const timeout = 400;
let url; 

if (Array.isArray(self.__precacheManifest)) {
  url = self.__precacheManifest.map(e => e.url);
} else {
  url = ["/index.html"];
}

const saveSubscription = async subscription => {
  const SERVER_URL = 'http://localhost:3000/api/swpush'
  const response = await fetch(SERVER_URL, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify(subscription),
  })
  return response.json()
}

const urlB64ToUint8Array = base64String => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')
  const rawData = atob(base64)
  const outputArray = new Uint8Array(rawData.length)
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

const showLocalNotification = (title, body, swRegistration) => {
  const options = {
    body,
    icon: "./favicon.png"
  };
  swRegistration.showNotification(title, options);
};

self.addEventListener('install', event => 
   event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(url)))
);

self.addEventListener('activate', async (event) => { 
  try {
    const applicationServerKey = urlB64ToUint8Array(
      "BJdnYn_COyWs3YrWq6DkfdNJpfNRoQQVadk4hKOb0B8D82r91J5gMOQxRXfpPpdsNJo8jo88KK0ElOZa9XHlnH8"
    )
    const options = { applicationServerKey, userVisibleOnly: true }
    const subscription = await self.registration.pushManager.subscribe(options)
    const response = await saveSubscription(subscription)
    console.log(response);
  } catch (err) {
    console.log('Error', err)
  }
});

self.addEventListener("push", (event) => {
  if (event.data) {
    console.log("Push event!! ", event.data.text());
    showLocalNotification("Yolo", event.data.text(),  self.registration);
  } else {
    console.log("Push event but no data");
  }
});

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
