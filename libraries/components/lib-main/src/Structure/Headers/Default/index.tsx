import { Button } from '@mui/material'
import { FC } from 'react'

const ButtonsUnlogged = ({ Link }: any) => (
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

const Header: FC<any> = ({ ButtonSignOut, logState = false, Image, Link }) => (
    <header className="mx-4">
        <div className="container flex justify-between items-center mx-auto">
            <Link href="/" className="logo">
                <a>
                    <Image src="/logo.png" width={90} height={90} />
                </a>
            </Link>
            <div>
                {logState ? <ButtonSignOut /> : <ButtonsUnlogged Link={Link} />}
            </div>
        </div>
    </header>
)

export { Header }
