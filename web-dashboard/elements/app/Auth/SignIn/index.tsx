import { FC } from 'react'
import { signInT } from './types'
import { validation } from './validation'
import { useForm } from 'react-hook-form'

const SignIn: FC<signInT> = ({ onSubmit, SubmitButton, Avatar, Input }) => {
    const formFns = useForm(validation)
    const errors = formFns.formState.errors
    const register = formFns.register

    return (
        <div className="mt-16 flex flex-col items-center container mx-auto">
            <Avatar />
            <h5 className="text-2xl mb-8">Sign In</h5>

            <form
                onSubmit={formFns.handleSubmit(onSubmit)}
                className="flex flex-col items-center w-80"
            >
                <Input
                    label="E-mail"
                    register={register('email')}
                    errors={!!errors.email}
                    helperText={errors.email && errors.email.message}
                />
                <Input
                    type="password"
                    label="Password"
                    register={register('password')}
                    errors={!!errors.password}
                    helperText={errors.password && errors.password.message}
                />
                <SubmitButton />
            </form>
        </div>
    )
}

export { SignIn }
