import React from 'react'
import axios from 'axios'
import { pageT } from 'elements/types'
import { response } from 'general/helpers'
import type { GetServerSideProps } from 'next'
import { ButtonSignOut, HeadHTML } from 'src/components'
import { Li, Structure, Error, Title } from 'elements/components'
import { simpleToDoDomainT, SimpleTodoList, errorMessages } from 'elements/app'

const Page: pageT<simpleToDoDomainT> = ({ data }) => {
    const dataList = data.data as simpleToDoDomainT[]
    const List = <SimpleTodoList list={dataList} Li={Li} />
    const ErrorJX = <Error message={data.message} />
    const View = () => (data.ok ? List : ErrorJX)

    return (
        <div>
            <HeadHTML title="My title" description="My description" />

            <Structure ButtonSignOut={ButtonSignOut}>
                <Title>All Simple ToDo</Title>
                <View />
            </Structure>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async context => {
    try {
        const url = process.env.NEXT_PUBLIC_BASE_API
        const uri = `${url}/simple-todo`
        const { data } = await axios.get(uri)
        const successRes = response(true, data.message, data.data)
        return { props: { data: successRes } }
    } catch (error: any) {
        const errorRes = response(false, errorMessages.getDefault, null)
        return { props: { data: errorRes } }
    }
}

export default Page
