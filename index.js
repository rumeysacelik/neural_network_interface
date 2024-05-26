const express = require('express');
const { initializeApp } = require('firebase/app');
const path = require('path');

const app = express();
const port = 3000;

// Firebase yapılandırması
const firebaseConfig = {
  apiKey: "AIzaSyDybFDHGYgaf_aCUksbwTvzKoodBCT0axc",
  authDomain: "cnninterface.firebaseapp.com",
  projectId: "cnninterface",
  storageBucket: "cnninterface.appspot.com",
  messagingSenderId: "757886726589",
  appId: "1:757886726589:web:0031829f0fea0a915f62d4",
  measurementId: "G-XWZCZYKF61"
};

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
