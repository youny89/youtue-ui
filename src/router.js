import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Layout from "./components/Layout";
import Login from "./pages/Login";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            { index:true, element:<Home type="random"/> },
            { path:"/tags", element:<Home type="/tags"/> },
            { path:"/shorts", element:<Home type="shorts"/> },
            { path:"/like", element:<Home type="like"/> },
            { path:"/subscription", element:<Home type="subscription"/> },
            { path:"/video/:id", element:<Video/>  }
        ],
    },
    {
        path:"/login",
        element:<Login />
    }
])

export default router;