import { signInT } from './types'

export const signInStandard: signInT =
    (res, errMsg, successsMsg, signIn) => auth => async data => {
        try {
            const { email, password } = data
            const credential = await signIn(auth, email, password)
            const user = credential.user
            const dataRes = { credential, user }
            return res(true, successsMsg.signIn, { data: dataRes }, 200)
        } catch (e: any) {
            const error = errMsg(e.message)
            return res(false, error, e, 400)
        }
    }
