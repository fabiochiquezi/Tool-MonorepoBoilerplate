import { Auth, UserCredential } from 'firebase/auth'
import { resFirebase, resFirebaseFnT } from '../../helpers/res/types'

type firebaseSignIn = (
    auth: Auth,
    email: string,
    password: string
) => Promise<UserCredential>

export type signInT = (
    res: resFirebaseFnT,
    errMsg: (msg: string) => string,
    successMessage: Record<string, string>,
    signIn: firebaseSignIn
) => (
    auth: any
) => (data: { email: string; password: string }) => Promise<resFirebase>
