import { useComponents } from 'elements/components'
import { auth } from 'src/config/firebase-auth'
import { ButtonSignOutT } from './types'
import { useRouter } from 'next/router'
import React from 'react'

const ButtonSignOut: React.FC<ButtonSignOutT> = ({ className = '' }) => {
    const router = useRouter()
    const { snackBar } = useComponents()

    async function signOut(e: any) {
        e.preventDefault()
        const { ok, message } = await auth.signOut()

        if (ok) {
            snackBar.setSnackBar({ open: true, message, severity: 'success' })
            router.push('/')
            return
        }

        snackBar.setSnackBar({ open: true, message, severity: 'error' })
    }

    return (
        <a
            className={`
                ${className}
                border-b-2
                border-gray-900
                font-bold
                hover:text-gray-300
                hover:border-gray-300
                transition duration-150 ease-out
            `}
            href=""
            onClick={e => signOut(e)}
        >
            Sign Out
        </a>
    )
}

export { ButtonSignOut }
