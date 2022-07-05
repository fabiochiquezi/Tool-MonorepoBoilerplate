import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const data = { content: yup.string().required() }

const schema = yup.object(data)
export const validation = { resolver: yupResolver(schema) }
