const makeServiceWorkerEnv = require('service-worker-mock');
const makeFetchMock = require('service-worker-mock/fetch');

// это все что я смог, блин вообще не понял как тестировать воркеры(
describe('Service worker', () => {
  beforeEach(() => {
    const serviceWorkerEnv = makeServiceWorkerEnv();
    Object.defineProperty(serviceWorkerEnv, "addEventListener", {
      value: serviceWorkerEnv.addEventListener,
      enumerable: true
    });
    Object.assign(global, serviceWorkerEnv, makeFetchMock);
    jest.resetModules();
  });

  it('static folder in cache', async () => {
    require('../sw.js');
    
    await self.trigger('install');
    const caches = self.snapshot().caches;
    expect("static" in caches);
  
  });
});