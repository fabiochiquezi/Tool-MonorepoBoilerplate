import { inputT } from 'types'
import { FC } from 'react'

export type signUpT = {
    onSubmit: (dataForm: any) => Promise<void>
    SubmitButton: FC
    Avatar: FC
    Input: FC<inputT>
}
