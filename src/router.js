import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Subscription from "./pages/Subscription";
import SubSetting from "./pages/SubSetting";
import UserDetail from "./pages/UserDetail";
import UserVideos from "./pages/UserVideos";
import UserCommunity from "./pages/UserCommunity";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout showTags/>,
        children:[
            { index:true, element:<Home type="random" showTags/> },
            { path:"/tags", element:<Home type="/tags"/> },
            { path:"/shorts", element:<Home type="shorts"/> },
            { path:"/like", element:<Home type="like"/> },
            { path:"/subscription", element:<Subscription type="subscription"/> },
            { path:"/subscription/settings", element:<SubSetting/> },
            { path:"/video/:id", element:<Video/>  },
            { path:"/account", element:<Account/>  },
            { 
                path:"/user/:id",
                element:<UserDetail/>,
                children:[
                    { path:"/user/:id/videos", element: <UserVideos />},
                    { path:"/user/:id/community", element: <UserCommunity />},
                ]
            },
        ],
    },
    {
        path:"/login",
        element:<Login />
    },
])

export default router;