import { createBrowserRouter } from 'react-router-dom'
import App from './App'

import Home from "./Components/Home/Home"
import Menu from "./Components/Menu/Menu";
import LandingPage from './LandingPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,

        children: [
            {
                path: '/',
                element: <LandingPage />
            },
            {
                path: '/menu',
                element: <Menu />
            }
        ]   
    }
])

export default router;
