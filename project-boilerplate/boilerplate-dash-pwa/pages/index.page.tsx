import React from 'react'
import axios from 'axios'
// import { pageT } from 'elements/types'
import { response } from 'helpers-front'
import type { GetServerSideProps } from 'next'
import { simpleToDoDomainT, SimpleTodoList, errorMessages } from 'app'
import { Error, Li, ButtonSignOut, HeadHTML } from 'lib-main'
import Head from 'next/head'
// Structure
// Title
// import Image from 'next/image'
// import Link from 'next/link'
import { useRouter } from 'next/router'
import { auth } from '../firebase-auth'

/*
    <Structure ButtonSignOut={ButtonSignOut} Image={Image} Link={Link}>
        <Title>All Simple ToDo</Title>
        <View />
    </Structure>
*/

const Page: pageT<simpleToDoDomainT> = ({ data }) => {
    const dataList = data.data as simpleToDoDomainT[]
    const List = <SimpleTodoList list={dataList} Li={Li} />
    const ErrorJX = <Error message={data.message} />
    const View = () => (data.ok ? List : ErrorJX)
    const Btn = <ButtonSignOut router={useRouter} signOutFn={auth.signOut} />

    return (
        <div>
            <HeadHTML
                Head={Head}
                title="My title"
                description="My description"
            />
            test
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
