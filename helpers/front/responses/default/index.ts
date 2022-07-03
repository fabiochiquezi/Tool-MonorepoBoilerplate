import { responseT } from './types'

const response: responseT = (ok, message, data = {}, status = 0) => ({
    ok,
    message,
    data,
    status
})

export { response }
