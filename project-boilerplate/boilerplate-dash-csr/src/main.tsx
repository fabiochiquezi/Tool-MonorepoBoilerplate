import App from './App'
import React from 'react'
import '../globalStyle.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import ReactDOM from 'react-dom/client'
import { ComponentsProvider } from 'lib-main'
import { GlobalStyle, ReactQuery } from 'configs-front'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyle />
        <ReactQuery>
            <ComponentsProvider>
                <App />
            </ComponentsProvider>
        </ReactQuery>
    </React.StrictMode>
)
