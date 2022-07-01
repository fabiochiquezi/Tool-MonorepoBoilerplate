import Router from 'next/router'
import { onSubmitFnT } from './types'
import { auth } from 'src/config/firebase-auth'

const onSubmitFn: onSubmitFnT = (setSnackBar, setLoading) => async dataForm => {
    try {
        setLoading(true)

        const newUser = await auth.signUp(dataForm)
        if (!newUser.ok) throw new Error(newUser.message)

        const authFn = await auth.signIn(dataForm)
        if (!authFn.ok) throw new Error(authFn.message)

        Router.push('/simple-todo/list')
    } catch (e: any) {
        setSnackBar({ open: true, message: e.message, severity: 'error' })
        setLoading(false)
    }
}

export { onSubmitFn }
