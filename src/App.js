import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Components/pages/Home";
import AboutPage from "./Components/pages/About";
import RootLayout from "./Components/pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/about", element: <AboutPage /> },
      { path: "/", element: <HomePage /> },
    ],
  },
]);

let App = () => {
  return <RouterProvider router={router} />;
};

export default App;
