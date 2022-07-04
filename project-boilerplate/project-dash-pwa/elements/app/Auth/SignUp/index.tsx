import { FC } from 'react'
import { signUpT } from './types'
import { validation } from './validation'
import { useForm } from 'react-hook-form'
import Container from '@mui/material/Container'

const SignUp: FC<signUpT> = ({ onSubmit, SubmitButton, Avatar, Input }) => {
    const formFns = useForm(validation)
    const errors = formFns.formState.errors
    const register = formFns.register

    return (
        <Container component="main" maxWidth="xs" className="mt-16">
            <form
                onSubmit={formFns.handleSubmit(onSubmit)}
                className="flex flex-col items-center"
            >
                <Avatar />

                <div className="flex">
                    <Input
                        label="First Name"
                        register={register('firstName')}
                        errors={!!errors.firstName}
                        helperText={
                            errors.firstName && errors.firstName.message
                        }
                        className="mr-2"
                    />
                    <Input
                        label="Last Name"
                        register={register('lastName')}
                        errors={!!errors.lastName}
                        helperText={errors.lastName && errors.lastName.message}
                        className="ml-2"
                    />
                </div>
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
        </Container>
    )
}

export { SignUp }
