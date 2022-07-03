import { Model } from 'mongoose'

export type deleteReturn = {
    delete: boolean
    message: string
}
export type props = <T>(
    Domain: Model<T>
) => (id: string) => Promise<deleteReturn>
