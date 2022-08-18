import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import { initializeApp } from 'firebase/app';
import { Provider } from 'react-redux';
import store from './data';
import { BrowserRouter } from 'react-router-dom';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCiyylyA97sSLLiAd5eecs_4wdYAK3Tlsk',
    authDomain: 'chat-b0050.firebaseapp.com',
    projectId: 'chat-b0050',
    storageBucket: 'chat-b0050.appspot.com',
    messagingSenderId: '995881682114',
    appId: '1:995881682114:web:e1b8c8348a646ed7a7e75b',
    measurementId: 'G-K7FG9538D8',
};

const app = initializeApp(firebaseConfig);

export const fireDatabase = getFirestore(app);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
// gg();
// async function gg() {
//     const querySnapshot = await getDocs(collection(db, 'users'));

//     querySnapshot.forEach((doc) => {
//         console.log(doc.data());
//     });
// }

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
