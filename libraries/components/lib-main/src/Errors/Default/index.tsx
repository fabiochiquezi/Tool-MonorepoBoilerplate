import React, { FC } from 'react'
import { ErrorT } from './types'

const Error: FC<ErrorT> = ({ message = '' }) => (
    <div className="flex justify-center mt-24 text-center text-xl">
        <p className="text-red-600">{message}</p>
    </div>
)

export { Error }
