// auth.js

// Firebase SDK'sını içeri aktar
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

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

// Auth örneğini alma
const auth = getAuth(firebaseApp);

// Kullanıcı kaydı
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Kullanıcı başarıyla kaydedildi, isteğe bağlı olarak burada bir yönlendirme yapılabilir
            console.log('Kullanıcı başarıyla kaydedildi:', userCredential.user);
        })
        .catch((error) => {
            // Hata oluştu, hata mesajı gösterilebilir veya loglanabilir
            console.error('Kullanıcı kaydı hatası:', error.message);
        });
});

// Kullanıcı girişi
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Kullanıcı başarıyla giriş yaptı, isteğe bağlı olarak burada bir yönlendirme yapılabilir
            console.log('Kullanıcı başarıyla giriş yaptı:', userCredential.user);
        })
        .catch((error) => {
            // Hata oluştu, hata mesajı gösterilebilir veya loglanabilir
            console.error('Kullanıcı girişi hatası:', error.message);
        });
});
