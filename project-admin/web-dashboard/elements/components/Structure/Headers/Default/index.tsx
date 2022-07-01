import { Button } from '@mui/material'
import { HeaderT } from './types'
import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ButtonsUnlogged = () => (
    <div>
        <Link href="/auth/sign-up">
            <a>
                <Button variant="contained" className="mr-4">
                    Sign Up
                </Button>
            </a>
        </Link>
        <Link href="/auth/sign-in">
            <a>
                <Button variant="contained">Sign In</Button>
            </a>
        </Link>
    </div>
)

const Header: FC<HeaderT> = ({ ButtonSignOut, logState = false }) => (
    <header className="mx-4">
        <div className="container flex justify-between items-center mx-auto">
            <Link href="/" className="logo">
                <a>
                    <Image src="/logo.png" width={90} height={90} />
                </a>
            </Link>
            <div>{logState ? <ButtonSignOut /> : <ButtonsUnlogged />}</div>
        </div>
    </header>
)

export { Header }
