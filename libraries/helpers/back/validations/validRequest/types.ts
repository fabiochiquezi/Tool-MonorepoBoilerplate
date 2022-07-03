import { Request } from 'express'

type resp = { valid: boolean; errors: any[] }
export type validRequestT = (validator: any) => (req: Request) => resp
