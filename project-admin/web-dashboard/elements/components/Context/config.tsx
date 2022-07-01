import { snackBarStateT } from 'elements/components'
import { createContext, Dispatch, SetStateAction, useContext } from 'react'

type types = {
    snackBar: {
        snackBar: snackBarStateT
        setSnackBar: Dispatch<SetStateAction<snackBarStateT>>
    }
}

const defaultData: types = {
    snackBar: {
        snackBar: {
            open: false,
            message: '',
            severity: 'error'
        },
        setSnackBar: () => null
    }
}

// ---------------------------------------------------------------- Hooks
export const context = createContext<types>(defaultData)
export const useComponents = () => useContext(context)
