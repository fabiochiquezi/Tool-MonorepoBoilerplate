import { FC, ReactNode } from 'react'
import { Header } from './Headers/Default'

type structureT = {
    children: ReactNode
    ButtonSignOut: FC
    logState: boolean
}

const Structure: FC<structureT> = ({ children, ButtonSignOut, logState }) => (
    <div className="mt-1">
        <Header ButtonSignOut={ButtonSignOut} logState={logState} />
        <div className="container mx-auto px-4 mt-16">{children}</div>
    </div>
)

export { Structure }
