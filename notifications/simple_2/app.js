Notification.requestPermission(async () => {
  await navigator.serviceWorker.register('sw.js', {});
});
