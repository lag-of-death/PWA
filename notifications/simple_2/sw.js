self.addEventListener('activate', function() {
  self.registration.showNotification('A notification from worker.', {
    body: 'From worker.',
  })
});
