import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const defaultCSS = 'transition duration-150 ease-out p-4'
const liActive = `${defaultCSS} text-blue-400 font-bold hover:text-blue-300`
const li = `${defaultCSS} hover:text-gray-300`

const Menu: React.FC = () => {
    const path = useRouter().pathname
    const URI = path.split('/')
    const route = URI[URI.length - 1]
    const isActive = (uri: string) => (route === uri ? liActive : li)

    return (
        <ul className="flex justify-center">
            <li>
                <Link href="/simple-todo/list">
                    <a className={isActive('list')}>List</a>
                </Link>
            </li>

            <li>|</li>

            <li>
                <Link href="/simple-todo/add">
                    <a className={isActive('add')}>Add</a>
                </Link>
            </li>
        </ul>
    )
}

export { Menu }
