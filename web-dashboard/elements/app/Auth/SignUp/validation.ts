import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// import YupPassword from 'yup-password'
// YupPassword(yup)

const schema = yup.object({
    firstName: yup.string().required('* First Name is required'),
    lastName: yup.string().required('* Last Name is required'),
    email: yup
        .string()
        .required('* E-mail is required')
        .email('* Must be a valid email e-mail'),
    password: yup
        .string()
        .required('Password is required')
        // .password()
        .min(6, 'Must be at least 6 characters')
        .matches(/^(\S+$)/g, '* This field cannot contain only blankspaces')
})

export const validation = { resolver: yupResolver(schema) }
