// eslint-disable-next-line no-unused-vars
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home"
import PageCategory from "../views/Category";
import PageProductDetail from "../views/Detail/index";


const router = createBrowserRouter([
    {
        path:"/",
        element: <Home />,
        errorElement: <div>Error 404</div>
    },
    {
        path:"/category/:id",
        element: <PageCategory />,
    },
    {
        path:"/item/:id",
        element: <PageProductDetail />,
    },
]);

const Routes = () => <RouterProvider router={router}/>

export default Routes;