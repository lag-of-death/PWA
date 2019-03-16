self.addEventListener('push', (event) => {
  event.waitUntil(
    self.registration.showNotification('ServiceWorker PUSH', {
      body: 'HELLO!',
    }),
  );
});
