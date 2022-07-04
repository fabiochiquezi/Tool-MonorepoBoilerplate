import { successMessage } from '../successMessages'
import { signUpT } from './types'

export const signUpStandard: signUpT =
    (res, errMsg, signUp) => auth => async data => {
        try {
            const { email, password } = data
            const newUser = await signUp(auth, email, password)
            return res(true, successMessage.signUp, { newUser }, 201)
        } catch (e: any) {
            const error = errMsg(e.message)
            return res(false, error, {}, 400)
        }
    }
