import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Layout from "./components/Layout";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:"/video/:id",
                element:<Video/>
            }
        ]
    }
])

export default router;