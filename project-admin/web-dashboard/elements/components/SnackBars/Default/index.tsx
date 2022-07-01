import { FC, SyntheticEvent } from 'react'
import { Snackbar } from '@mui/material'
import { SnackBarT } from './types'
import { Alert } from '../Alert'

const SnackBar: FC<SnackBarT> = ({
    open,
    message = '',
    severity,
    autoHide = 6000,
    setSnackBar
}) => {
    const vertical = 'top'
    const horizontal = 'center'

    const handleClose = (_event?: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return
        const reset = { open: false, message, severity }
        setSnackBar(reset)
    }

    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            key={vertical + horizontal}
            autoHideDuration={autoHide}
        >
            <Alert
                onClose={handleClose}
                severity={severity}
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    )
}

export { SnackBar }
