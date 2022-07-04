import { Auth, Unsubscribe } from 'firebase/auth'

export type authStateT = (auth: Auth) => (fn: any) => Unsubscribe
