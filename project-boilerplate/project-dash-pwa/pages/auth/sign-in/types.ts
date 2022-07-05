import { snackBarStateT } from 'elements/components'
import { Dispatch, SetStateAction } from 'react'

export type onSubmitFnT = (
    setSnackBar: Dispatch<SetStateAction<snackBarStateT>>,
    setLoading: Dispatch<SetStateAction<boolean>>
) => (dataForm: any) => Promise<void>
