import Link from 'next/link'
import { useState } from 'react'
import type { NextPage } from 'next'
import { SignIn } from 'elements/app'
import { HeadHTML } from 'src/components'
import { onSubmitFn } from './onSubmitFn'
import {
    SubmitButton,
    useComponents,
    AvatarDefault,
    Input
} from 'elements/components'

const AuthSignIn: NextPage = () => {
    const { snackBar } = useComponents()
    const [loading, setLoading] = useState(false)
    const onSubmit = onSubmitFn(snackBar.setSnackBar, setLoading)

    const SubmitBtn = () => (
        <SubmitButton
            btnText="Sign In"
            loading={loading}
            className="mt-4 mb-8"
        />
    )

    return (
        <div>
            <HeadHTML title="My title" description="My description" />

            <main className="text-center">
                <SignIn
                    onSubmit={onSubmit}
                    SubmitButton={SubmitBtn}
                    Avatar={AvatarDefault}
                    Input={Input}
                />

                <Link href="/auth/sign-up">
                    <a className="text-center text-blue-600 hover:text-gray-600">
                        Dont have an account? Sign Up
                    </a>
                </Link>
            </main>
        </div>
    )
}

export default AuthSignIn
