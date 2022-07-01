import { successMessage } from '../successMessages'
import { getError } from '../errMessages'
import { resp } from '../../helpers/res'
import { signOut } from 'firebase/auth'
import { signOutT } from './types'

const signOutStandard: signOutT =
    (res, errMsg, successsMsg, signOut) => auth => async () => {
        try {
            await signOut(auth)
            return res(true, 200, successsMsg.signOut, {})
        } catch (e: any) {
            const error = errMsg(e.message)
            return res(false, 400, error, e)
        }
    }

export const goOut = signOutStandard(resp, getError, successMessage, signOut)
