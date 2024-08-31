import { createBrowserRouter } from 'react-router-dom'
import App from './App'

import Home from "./Components/Home/Home"
import Menu from "./Components/Menu/Menu";
import LandingPage from './LandingPage';
import Footer from './Components/Footer/footer';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';

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
            },
            {
                path: '/privacy',
                element: <PrivacyPolicy />
            }
        ]   
    }
])

export default router;
