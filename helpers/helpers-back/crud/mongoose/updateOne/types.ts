import { Document } from 'mongoose'

export type props = <T>(doc: Document<T>) => (data: any) => Promise<{
    update: boolean
    message: string
}>
