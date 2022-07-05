import { firebaseAuth, fireSettings } from 'firebase-auth'

const firebaseConfig = {
    apiKey: 'AIzaSyBr0_xNz0Ck-XBncLK66rS0OobTzFy77xQ',
    authDomain: 'toolnextjsboilerplate.firebaseapp.com',
    projectId: 'toolnextjsboilerplate',
    storageBucket: 'toolnextjsboilerplate.appspot.com',
    messagingSenderId: '79575065167',
    appId: '1:79575065167:web:ffcae889d3fe9f3295803a',
    measurementId: 'G-YWJT05RWPL'
}

const settings = fireSettings(firebaseConfig)
export const auth = firebaseAuth(settings.auth)

if (process.env.NODE_ENV === 'development') {
    settings.emulator('http://localhost:9099')
}
