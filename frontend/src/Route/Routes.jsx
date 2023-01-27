import About from "../Pages/About/About";
import AddData from "../Pages/AddData/AddData";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import MainRoot from "../Pages/MainRoot";
import Page from "../Pages/Page/Page";

export const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "page",
                element: <Page />
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "add",
                element: <AddData />
            }
        ]
    }
]