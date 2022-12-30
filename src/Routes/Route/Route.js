import AddTask from "../../Pages/Home/AddTask/AddTask";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Home/Login/Login";
import MyTask from "../../Pages/Home/MyTask/MyTask";
import Signup from "../../Pages/Home/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/addtask',
                element: <AddTask></AddTask>
            },
            {
                path: '/mytask',
                element: <MyTask></MyTask>
            }
        ]
    }
])

export default router;