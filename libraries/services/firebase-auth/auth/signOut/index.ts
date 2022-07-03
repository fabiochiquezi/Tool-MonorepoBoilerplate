import { successMessage } from '../successMessages'
import { getError } from '../errMessages'
import { signOut } from 'firebase/auth'
import { signOutT } from './types'
import { response } from 'helpers'

const signOutStandard: signOutT =
    (res, errMsg, successsMsg, signOut) => auth => async () => {
        try {
            await signOut(auth)
            return res(true, successsMsg.signOut, {}, 200)
        } catch (e: any) {
            const error = errMsg(e.message)
            return res(false, error, e, 400)
        }
    }

export const goOut = signOutStandard(
    response,
    getError,
    successMessage,
    signOut
)
