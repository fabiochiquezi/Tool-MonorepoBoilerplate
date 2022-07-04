import { successMessage as scss } from './auth/successMessages'
import { getError as error } from './auth/errMessages'
import { signOutStandard } from './auth/signOut'
import { response as res } from 'helpers-front'
import { signInStandard } from './auth/signIn'
import { signUpStandard } from './auth/signUp'
import { authState } from './auth/authState'
import { initializeApp } from 'firebase/app'
import {
    createUserWithEmailAndPassword as fireSignUp,
    signInWithEmailAndPassword as fireSignIn,
    connectAuthEmulator,
    signOut,
    Auth,
    getAuth
} from 'firebase/auth'

// --- Settings
export type firebaseConfig = {
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

// -- Fns
export const signUp = signUpStandard(res, error, fireSignUp)
export const signIn = signInStandard(res, error, scss, fireSignIn)
export const goOut = signOutStandard(res, error, scss, signOut)

export const firebaseAuth = (auth: Auth) => ({
    signIn: signIn(auth),
    signOut: goOut(auth),
    signUp: signUp(auth),
    state: authState(auth)
})
