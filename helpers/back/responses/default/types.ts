import { Response } from 'express'

export type respT = <T>(
    res: Response,
    status: number,
    ok: boolean,
    message?: string,
    data?: T | T[] | Object
) => Response
