import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import 'general/config/globalStyle.css'
import type { AppProps } from 'next/app'
import { authMiddlewre } from 'src/config'
import { ReactQuery } from 'general/config'
import { auth } from 'src/config/firebase-auth'
import { ComponentsProvider } from 'elements/components'

function MyApp({ Component, pageProps }: AppProps) {
    auth.state(authMiddlewre)

    return (
        <ReactQuery>
            <ComponentsProvider>
                <Component {...pageProps} />
            </ComponentsProvider>
        </ReactQuery>
    )
}

export default MyApp
