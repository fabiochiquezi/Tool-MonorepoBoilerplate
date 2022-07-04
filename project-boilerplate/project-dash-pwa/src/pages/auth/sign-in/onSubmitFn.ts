import Router from 'next/router'
import { onSubmitFnT } from './types'
import { auth } from 'src/config/firebase-auth'

const onSubmitFn: onSubmitFnT = (setSnackBar, setLoading) => async dataForm => {
    setLoading(true)
    const { message, ok } = await auth.signIn(dataForm)

    if (ok) {
        setSnackBar({ open: true, message, severity: 'success' })
        Router.push('/simple-todo/list')
        return
    }

    setSnackBar({ open: true, message, severity: 'error' })
    setLoading(false)
}

export { onSubmitFn }
