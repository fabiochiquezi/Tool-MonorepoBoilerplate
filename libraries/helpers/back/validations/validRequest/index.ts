import { validRequestT } from './types'

export const validRequest: validRequestT = validator => req => {
    const errors = validator(req)
    const thereAreErrors = !errors.isEmpty()
    if (thereAreErrors) return { valid: false, errors: errors.array() }
    return { valid: true, errors: [] }
}
