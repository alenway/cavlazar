import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "../pages/cutomers/home/Home";
import About from "../pages/cutomers/about/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true, // renders at "/"
                element: <Home />,
            },
            {
                path: "about", // renders at "/dashboard"
                element: <About />,
            },
        ],
    },
]);

export default router;
