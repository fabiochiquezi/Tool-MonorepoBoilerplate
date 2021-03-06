import { Auth, UserCredential } from 'firebase/auth'
import { responseDataT, responseT } from 'helpers-front'

type firebaseSignUp = (
    auth: Auth,
    email: string,
    password: string
) => Promise<UserCredential>

export type signUpT = (
    res: responseT,
    errMsg: (msg: string) => string,
    signUp: firebaseSignUp
) => (
    auth: Auth
) => <T>(data: { email: string; password: string }) => Promise<responseDataT<T>>
