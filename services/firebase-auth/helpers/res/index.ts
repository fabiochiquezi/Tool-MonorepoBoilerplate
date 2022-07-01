import { resFirebaseFnT } from './types'

const resp: resFirebaseFnT = (ok, status, message, data) => {
    return {
        ok,
        status,
        message,
        data
    }
}

export { resp }
