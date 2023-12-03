import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StorePage from "./Components/pages/Store";
import AboutPage from "./Components/pages/About";
import RootLayout from "./Components/pages/Root";
import HomePage from "./Components/pages/Home";
import ContactUsPage from "./Components/pages/ContactUs";
import ProductDetails from "./Components/pages/ProductDetails";
import Products from "./Components/pages/Products";
import LoginPage from "./Components/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/home", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/", element: <StorePage /> },
      { path: "/contactus", element: <ContactUsPage /> },
      { path: "/products", element: <Products /> },
      { path: "/auth", element: <LoginPage /> },
      {
        path: "products/:productId/:price/:imgUrl",
        element: <ProductDetails />,
      },
    ],
  },
]);

let App = () => {
  return <RouterProvider router={router} />;
};

export default App;
