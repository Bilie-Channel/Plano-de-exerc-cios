self.addEventListener('install', event => {
  console.log('Service Worker instalado.');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker ativado.');
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});

// Recebe mensagens para notificações de teste
self.addEventListener('message', event => {
  if(event.data && event.data.type === 'TEST_NOTIFICATION'){
    self.registration.showNotification('Teste de Notificação', {
      body: event.data.body || 'Esta é uma notificação de teste do PWA!',
      icon: 'icon-192.png'
    });
  }
});