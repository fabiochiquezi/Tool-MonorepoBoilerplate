import { resFirebaseFnT } from './types'

const response: resFirebaseFnT = (ok, status, message, data) => {
    return {
        ok,
        status,
        message,
        data
    }
}

export { response }
