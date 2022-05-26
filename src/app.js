import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/main'
const Observer = lazy(() => import('./pages/observer/index'))
const Scroll = lazy(() => import('./pages/scroll/index'))
const Error = lazy(() => import('./pages/error/index'))

function App() {
    const routes = [
        { path: '/', element: <Main /> },
        { path: '/scroll', element: <Scroll /> },
        { path: '/observer', element: <Observer /> },
        { path: '*', element: <Error/> }
    ]

    return (
        <BrowserRouter>
            <Suspense fallback={<>Loading...</>}>
                <Routes>

                    {routes.map((e) => <Route key={`route - ${e.path}`} path={e.path} element={e.element} />)}

                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default App