import { onAuthStateChanged } from 'firebase/auth'
import { authStateT } from './types'

export const authState: authStateT = auth => fn => onAuthStateChanged(auth, fn)
