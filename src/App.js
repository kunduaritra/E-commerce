import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import StorePage from "./Components/pages/Store";
import AboutPage from "./Components/pages/About";
import RootLayout from "./Components/pages/Root";
import HomePage from "./Components/pages/Home";
import ContactUsPage from "./Components/pages/ContactUs";
import ProductDetails from "./Components/pages/ProductDetails";
import Products from "./Components/pages/Products";
import LoginPage from "./Components/pages/Login";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

let App = () => {
  const authCntx = useContext(AuthContext);
  const isLoggedIn = authCntx.isLoggedIn;
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route
              path="/home"
              element={
                <>
                  {isLoggedIn && <HomePage />}
                  {!isLoggedIn && <Navigate to="/auth" />}
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/"
              element={
                <>
                  {isLoggedIn && <StorePage />}
                  {!isLoggedIn && <Navigate to="/auth" />}
                </>
              }
            />
            <Route path="/contactus" element={<ContactUsPage />} />
            {isLoggedIn && <Route path="/products" element={<Products />} />}
            <Route
              path="/auth"
              element={
                <>
                  {!isLoggedIn && <LoginPage />}
                  {isLoggedIn && <Navigate to="/" />}
                </>
              }
            />
            <Route
              path="products/:productId/:price/:imgUrl"
              element={<ProductDetails />}
            />
            <Route path="/auth" element={<LoginPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
