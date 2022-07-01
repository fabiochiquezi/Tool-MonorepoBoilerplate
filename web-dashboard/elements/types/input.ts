import { UseFormRegisterReturn } from 'react-hook-form'

export type inputT = {
    register: UseFormRegisterReturn<string>
    errors: boolean
    label: string
    helperText: string
    type?: string
    defaultValue?: string
    className?: string
}
