import { Model } from 'mongoose'

export type findDeleteReturn = {
    del: boolean
    message: string
}
export type props = <T>(
    Domain: Model<T>
) => (id: string) => Promise<findDeleteReturn>
