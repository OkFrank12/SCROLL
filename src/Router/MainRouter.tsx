import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Block/Layout";
import LandingScreen from "../Pages/LandingScreen";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingScreen />,
      },
    ],
  },
]);
