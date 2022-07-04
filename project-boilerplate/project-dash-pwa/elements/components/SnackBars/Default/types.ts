import { Dispatch, SetStateAction } from 'react'
import { AlertColor } from '@mui/material'

export type snackBarStateT = {
    open: boolean
    message: string
    severity: AlertColor | undefined
}

export type SnackBarT = {
    open: boolean
    message?: string
    severity: AlertColor | undefined
    autoHide?: number
    setSnackBar: Dispatch<SetStateAction<snackBarStateT>>
}
