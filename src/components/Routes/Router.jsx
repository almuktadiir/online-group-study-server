import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateAssignments from "../Pages/CreateAssignments/CreateAssignments";
import AllAssignments from "../Pages/AllAssignments/AllAssignments";
import MyAssignments from "../Pages/MyAssignments/MyAssignments";
import SubmittedAssignments from "../Pages/SubmittedAssignments/SubmittedAssignments";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/allAssignments',
            element: <AllAssignments></AllAssignments>
        },
        {
            path: '/myAssignments',
            element: <MyAssignments></MyAssignments>
        },
        {
            path: '/submittedAssignments',
            element: <SubmittedAssignments></SubmittedAssignments>
        },
        {
            path: '/createAssignments',
            element: <CreateAssignments></CreateAssignments>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    },
  ]);


  export default router;