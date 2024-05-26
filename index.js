const express = require('express');
const { initializeApp } = require('firebase/app');
const path = require('path');

const app = express();
const port = 3000;

// Firebase yapılandırması

// Firebase uygulamasını başlatma

const firebaseApp = initializeApp(firebaseConfig);

// Static dosyaları sunma
app.use('/firebase-config.js', express.static(path.join(__dirname, 'path/to/firebase-config.js')));

// Ana sayfayı gösterme
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} üzerinde çalışıyor`);
});
