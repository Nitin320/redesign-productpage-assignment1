import { BrowserRouter } from 'react-router-dom'
import Theme from '@/components/template/Theme'
import Layout from '@/components/layouts'
import Header from './components/template/Header'
import { AuthProvider } from '@/auth'
import Views from '@/views'
import appConfig from './configs/app.config'
import './locales'
import Home from './views/Home'
import { Suspense } from 'react'

if (appConfig.enableMock) {
    import('./mock')
}

function App() {
    return (
        <Theme>
            <BrowserRouter>
                <AuthProvider>
                <Suspense fallback={<div>Loading...</div>}>
                    <Home />
                </Suspense>
                </AuthProvider>
            </BrowserRouter>
        </Theme>
    )
}

export default App
