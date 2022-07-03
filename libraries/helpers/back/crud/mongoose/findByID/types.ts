import { Document, Model } from 'mongoose'

export type props = <T>(Domain: Model<any>) => (id: string) => Promise<{
    findByID: boolean
    message: string
    doc: Document<T, any> | object
}>
