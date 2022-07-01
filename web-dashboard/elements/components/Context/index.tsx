import { context } from './config'
import React, { useState, ReactNode } from 'react'
import { SnackBar, snackBarStateT } from 'elements/components'

const ComponentsProvider = ({ children }: { children: ReactNode }) => {
    const [snackBar, setSnackBar] = useState<snackBarStateT>({
        open: false,
        message: '',
        severity: 'error'
    })

    const value = {
        snackBar: { snackBar, setSnackBar }
    }

    return (
        <>
            <context.Provider value={value}>
                <SnackBar
                    open={snackBar.open}
                    message={snackBar.message}
                    severity={snackBar.severity}
                    setSnackBar={setSnackBar}
                />
                {children}
            </context.Provider>
        </>
    )
}

export { ComponentsProvider }
