import { signOutT } from './types'

export const signOutStandard: signOutT =
    (res, errMsg, successsMsg, signOut) => auth => async () => {
        try {
            await signOut(auth)
            return res(true, successsMsg.signOut, {}, 200)
        } catch (e: any) {
            const error = errMsg(e.message)
            return res(false, error, e, 400)
        }
    }
