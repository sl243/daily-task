import Login from "../../Pages/Home/Login/Login";
import Signup from "../../Pages/Home/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
])

export default router;