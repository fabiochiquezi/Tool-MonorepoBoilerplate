import { respT } from './types'

export const resp: respT = (res, status, ok, message = '', data = {}) =>
    res.status(status).json({ ok, message, data }).end()
