import { props } from './types'

const errrorHandler: props = (err, _req, res, _next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode)
    res.json({
        ok: false,
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

export { errrorHandler }
