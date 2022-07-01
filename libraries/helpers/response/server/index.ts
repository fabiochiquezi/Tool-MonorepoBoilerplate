import { ResponseStd } from './types'

export const resp: ResponseStd = (res, status = 500, ok, message, data) => {
    return res
        .status(status)
        .json({
            ok,
            message,
            data
        })
        .end()
}
