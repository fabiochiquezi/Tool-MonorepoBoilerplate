import Link from 'next/link'
import { useState } from 'react'
import type { NextPage } from 'next'
import { Grid } from '@mui/material'
import { SignUp } from 'elements/app'
import { onSubmitFn } from './onSubmitFn'
import { HeadHTML } from 'src/components'
import {
    AvatarDefault,
    Input,
    SubmitButton,
    useComponents
} from 'elements/components'

const AuthSignUp: NextPage = () => {
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

            <main>
                <SignUp
                    onSubmit={onSubmit}
                    SubmitButton={SubmitBtn}
                    Avatar={AvatarDefault}
                    Input={Input}
                />

                <Grid container justifyContent="center" className="mt-4">
                    <Grid item>
                        <Link href="/auth/sign-in">
                            <a className="text-blue-600">
                                Already have an account? Sign in
                            </a>
                        </Link>
                    </Grid>
                </Grid>
            </main>
        </div>
    )
}

export default AuthSignUp
