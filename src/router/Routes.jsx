import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout"
import { Home } from "lucide-react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UpcomingEvents from "../pages/UpcomingEvents";
import CreateEvent from "../pages/CreateEvent";
import EventDetails from "../pages/EventDetails";
import JoinedEvents from "../pages/JoinedEvents";
import ManageEvents from "../pages/ManageEvents";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/upcoming-events",
      element: <UpcomingEvents />
    },
    {
      path: "/create-event",
      element:
        <PrivateRoute>
          <CreateEvent />
        </PrivateRoute>
    },
    {
      path: "/event/:id",
      element: <EventDetails />,
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
    ]
  },
]);

export default router;
