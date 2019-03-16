Notification.requestPermission(async () => {
  const worker = await navigator.serviceWorker.register('sw.js', {});

  worker.showNotification('hello!');
});
