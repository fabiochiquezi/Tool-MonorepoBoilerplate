export type responseT = <T>(
    ok: boolean,
    message: string,
    data?: T | T[] | null
) => {
    ok: boolean
    message: string
    data: T | T[] | null
}

export const response: responseT = (ok, message, data = null) => {
    return {
        ok,
        message,
        data
    }
}
