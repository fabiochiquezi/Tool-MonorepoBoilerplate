import React, { FC } from 'react'

/*
type HeadHTMLT = {
    title: string
    description: string
    favicon?: string
}
*/

const HeadHTML: FC<any> = ({
    title,
    description,
    favicon = 'ico/favicon.ico',
    Head
}) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={favicon} />
    </Head>
)

export { HeadHTML }
