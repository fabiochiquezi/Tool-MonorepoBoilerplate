import { signInWithEmailAndPassword } from 'firebase/auth'
import { successMessage } from '../successMessages'
import { getError } from '../errMessages'
import { resp } from '../../helpers/res'

import { signInT } from './types'

const signInStandard: signInT =
    (res, errMsg, successsMsg, signIn) => auth => async data => {
        try {
            const { email, password } = data
            const credential = await signIn(auth, email, password)
            const user = credential.user
            const dataRes = { credential, user }
            return res(true, 200, successsMsg.signIn, { data: dataRes })
        } catch (e: any) {
            const error = errMsg(e.message)
            return res(false, 400, error, e)
        }
    }

export const signIn = signInStandard(
    resp,
    getError,
    successMessage,
    signInWithEmailAndPassword
)
