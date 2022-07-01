import { signIn } from './auth/signIn'
import { goOut } from './auth/signOut'
import { signUp } from './auth/signUp'
import { authState } from './auth/authState'
import { initializeApp } from 'firebase/app'
import { Auth, getAuth, connectAuthEmulator } from 'firebase/auth'

type firebaseConfig = {
    apiKey: string
    authDomain: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string
    measurementId: string
}

export const fireSettings = (firebaseConfig: firebaseConfig) => {
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const emulatorObj = (url: string) => connectAuthEmulator(auth, url)

    return {
        app,
        auth,
        emulator: emulatorObj
    }
}

export const firebaseAuth = (auth: Auth) => ({
    signIn: signIn(auth),
    signOut: goOut(auth),
    signUp: signUp(auth),
    state: authState(auth)
})
