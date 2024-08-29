import { createBrowserRouter } from 'react-router-dom'
import App from './App'

import Home from "./Components/Home/Home"
import Menu from "./Components/Menu/Menu"

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/Menu',
                element: <Menu />
            }
        ]   
    }
])

export default router;
