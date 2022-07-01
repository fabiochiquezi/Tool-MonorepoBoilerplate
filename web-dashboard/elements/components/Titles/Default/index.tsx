import { FC } from 'react'
import { TitleT } from './types'

const Title: FC<TitleT> = ({ children }) => (
    <h1 className="text-center text-4xl font-bold w-100 mb-8">
        {children ?? 'SimpleToDo'}
    </h1>
)

export { Title }
