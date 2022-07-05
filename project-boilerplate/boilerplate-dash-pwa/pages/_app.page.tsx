import '../globalStyle.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import type { AppProps } from 'next/app'
import { ComponentsProvider } from 'components/Context'
import { ReactQuery, GlobalStyle } from 'configs-front'

function MyApp({ Component, pageProps }: AppProps) {
    // auth.state(authMiddlewre)

    return (
        // <ReactQuery>
        // <ComponentsProvider>

        // <GlobalStyle />
        <Component {...pageProps} />

        // </ComponentsProvider>
        // </ReactQuery>
    )
}

export default MyApp
