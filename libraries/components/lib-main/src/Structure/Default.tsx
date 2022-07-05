import { FC } from 'react'
import { Header } from './Headers/Default'

/*
type structureT = {
    children: ReactNode
    ButtonSignOut: FC
    logState: boolean
}
*/

const Structure: FC<any> = ({
    children,
    ButtonSignOut,
    logState,
    Image,
    Link
}) => (
    <div className="mt-1">
        <Header
            Image={Image}
            Link={Link}
            ButtonSignOut={ButtonSignOut}
            logState={logState}
        />
        <div className="container mx-auto px-4 mt-16">{children}</div>
    </div>
)

export { Structure }
