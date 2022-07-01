import type { NextPage } from 'next'
import React, { useState } from 'react'
import { SimpleTodoAdd } from 'elements/app'
import { ButtonSignOut, HeadHTML } from 'src/components'
import {
    Structure,
    Title,
    Menu,
    SubmitButton,
    Input
} from 'elements/components'

const SimpleToDoAddPage: NextPage = () => {
    const [loading, setLoading] = useState(false)

    const SubmitBtn = () => (
        <SubmitButton
            btnText="Sign In"
            loading={loading}
            className="mt-4 mb-8"
        />
    )

    return (
        <div>
            <HeadHTML title="My title" description="My description" />

            <Structure ButtonSignOut={ButtonSignOut}>
                <Title>Add a ToDo document</Title>
                <Menu />
                <SimpleTodoAdd SubmitButton={SubmitBtn} Input={Input} />
            </Structure>
        </div>
    )
}

export default SimpleToDoAddPage
