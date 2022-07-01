export type resFirebase = {
    ok: boolean
    status: number
    message: string
    data: any
}

export type resFirebaseFnT = (
    ok: boolean,
    status: number,
    message: string,
    data: any
) => resFirebase
