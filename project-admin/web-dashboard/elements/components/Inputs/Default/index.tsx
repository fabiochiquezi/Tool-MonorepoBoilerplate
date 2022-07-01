import { TextField } from '@mui/material'
import { inputT } from 'types'
import { FC } from 'react'

const Input: FC<inputT> = ({
    errors,
    register,
    label,
    helperText = '',
    type = 'text',
    defaultValue = '',
    className = ''
}) => (
    <TextField
        label={label}
        error={errors}
        variant="outlined"
        fullWidth
        margin="normal"
        type={type}
        {...register}
        defaultValue={defaultValue}
        helperText={helperText}
        className={`${className} w-100`}
    />
)

export { Input }
