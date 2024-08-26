import { createBrowserRouter } from 'react-router-dom'
import App from './App'

import Home from "./Components/Home/Home"

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <div>Hello World</div>
            }
        ]   
    }
])

export default router;
