import { Button, CircularProgress } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { SubmitButtonT } from './types'
import { FC } from 'react'

const SubmitButton: FC<SubmitButtonT> = ({ btnText, loading, className }) => (
    <Button
        type="submit"
        variant="contained"
        size="small"
        className={`${className} bg-blue-600 h-10 w-28`}
        endIcon={!loading ? <SendIcon /> : ''}
        disabled={!!loading}
    >
        {!loading ? btnText : <CircularProgress size={20} color="inherit" />}
    </Button>
)

export { SubmitButton }
