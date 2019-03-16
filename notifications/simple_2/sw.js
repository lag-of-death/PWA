self.addEventListener('activate', () => {
  self.registration.showNotification('A notification from worker.', {
    body: 'From worker.',
  });
});
