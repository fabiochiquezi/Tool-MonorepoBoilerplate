import React, { FC } from 'react'
import { Title2T } from './types'

const Title2: FC<Title2T> = ({ children }) => (
    <h1 className="text-center text-2xl font-bold w-100 mb-8">
        {children ?? 'SimpleToDo'}
    </h1>
)

export { Title2 }
