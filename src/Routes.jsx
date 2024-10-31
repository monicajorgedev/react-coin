import { createBrowserRouter } from "react-router-dom";
import Header from "./pages/Header";
import Home from './pages/Home'
import Coin from './pages/Coin'
import Favorites from './pages/Favorites'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        children: [
            {path:'/', element:<Home />},
            {path:'/coin/:id', element:<Coin />},
            {path:'/favorites', element:<Favorites />}
        ]
    }
])

export default router