import React, { FC } from 'react'
import Head from 'next/head'

type HeadHTMLT = {
    title: string
    description: string
    favicon?: string
}

const HeadHTML: FC<HeadHTMLT> = ({
    title,
    description,
    favicon = 'ico/favicon.ico'
}) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={favicon} />
    </Head>
)

export { HeadHTML }
