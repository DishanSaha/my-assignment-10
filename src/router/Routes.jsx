import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateEvent from "../pages/CreateEvent";
import EventDetails from "../pages/EventDetails";
import JoinedEvents from "../pages/JoinedEvents";
import ManageEvents from "../pages/ManageEvents";
import PrivateRoute from "./PrivateRoute";
import AuthLayout from "../layout/AuthLayout";
import UpEvents from "../pages/UpEvents";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/upcoming-events",
        loader: () => fetch("/public/dummyEvents.json"),
        element: <UpEvents />,
      },
      {
        path: "/events/:id",
        loader: () => fetch("/public/dummyEvents.json"),
        element: <EventDetails />
      },
      {
        path: "/create-event",
        element:

            <CreateEvent />

      },

      {
        path: "/joined-events",
        element:
          <PrivateRoute>
            <JoinedEvents />
          </PrivateRoute>
      },
      {
        path: "/manage-events",
        element:
          <PrivateRoute>
            <ManageEvents />
          </PrivateRoute>
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;

