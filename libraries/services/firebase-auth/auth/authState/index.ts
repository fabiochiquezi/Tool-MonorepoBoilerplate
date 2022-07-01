import { Auth, onAuthStateChanged } from 'firebase/auth'

export const authState = (auth: Auth) => (fn: any) =>
    onAuthStateChanged(auth, fn)
