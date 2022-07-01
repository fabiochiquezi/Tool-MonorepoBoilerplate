import { FC } from 'react'
import { simpleToDoAddT } from './types'
import { useForm } from 'react-hook-form'
import { validation } from '../validation'

const SimpleTodoAdd: FC<simpleToDoAddT> = ({ SubmitButton, Input }) => {
    const formFns = useForm(validation)
    const errors = formFns.formState.errors
    const register = formFns.register

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <div className="mt-12">
            <form
                onSubmit={formFns.handleSubmit(onSubmit)}
                className="flex flex-col items-center"
            >
                <Input
                    label="Content"
                    register={register('content')}
                    errors={!!errors.content}
                    helperText={errors.content && errors.email.content}
                />
                <SubmitButton />
            </form>
        </div>
    )
}

export { SimpleTodoAdd }
