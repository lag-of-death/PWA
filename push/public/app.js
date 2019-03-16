(async ({ urlBase64ToUint8Array }) => {
  const createSubscription = async (serviceWorkerRegistration) => {
    const resp = await fetch('/public-key');
    const publicKey = await resp.text();

    return serviceWorkerRegistration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicKey),
    });
  };

  const getSubscription = async (serviceWorkerRegistration) => {
    const subscription = await serviceWorkerRegistration.pushManager.getSubscription();

    return subscription || createSubscription(serviceWorkerRegistration);
  };

  navigator.serviceWorker.register('push-sw.js');

  const serviceWorkerRegistration = await navigator.serviceWorker.ready;
  const subscription = await getSubscription(serviceWorkerRegistration);

  fetch('./send-notif', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      subscription,
    }),
  });
})(this.window);
