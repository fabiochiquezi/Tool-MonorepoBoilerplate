import { NextPage } from 'next'

type nextReq<T> = {
    data: {
        ok: boolean
        message: string
        data: T[] | T | null
    }
}

export type pageT<T> = NextPage<nextReq<T>>
