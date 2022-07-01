import { Auth, UserCredential } from 'firebase/auth'
import { resFirebase, resFirebaseFnT } from '../../helpers/res/types'

type firebaseSignUp = (
    auth: Auth,
    email: string,
    password: string
) => Promise<UserCredential>

export type signUpT = (
    res: resFirebaseFnT,
    errMsg: (msg: string) => string,
    signUp: firebaseSignUp
) => (
    auth: Auth
) => (data: { email: string; password: string }) => Promise<resFirebase>
