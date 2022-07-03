import { Auth, UserCredential } from 'firebase/auth'
import { responseDataT, responseT } from 'helpers'

type firebaseSignIn = (
    auth: Auth,
    email: string,
    password: string
) => Promise<UserCredential>

export type signInT = (
    res: responseT,
    errMsg: (msg: string) => string,
    successMessage: Record<string, string>,
    signIn: firebaseSignIn
) => (
    auth: any
) => <T>(data: { email: string; password: string }) => Promise<responseDataT<T>>
