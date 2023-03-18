import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import Home from "./views/Home";
import About from "./views/About";
import Product from "./views/Product";
import Recipes from "./views/Recipes";
import Profile from "./views/Profile";
import Cart from "./views/Cart";
import Contact from "./views/Contact";
import Favorites from "./views/Favorites";
import Login from "./views/Login";
import Configurations from "./views/Configurations";
import PayMethod from "./views/PayMethod";
import Confirmation from "./views/Confirmation";
import Register from "./views/Register";
import ThankYou from "./views/Confirmation/ThankYou";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/profile", element: <Profile /> },
    { path: "/about", element: <About /> },
    { path: "/recipes", element: <Recipes /> },
    { path: "/product/:id", element: <Product /> },
    { path: "/cart", element: <Cart /> },
    { path: "/contact", element: <Contact /> },
    { path: "/favorites", element: <Favorites /> },
    { path: "/login", element: <Login /> },
    { path: "/config", element: <Configurations /> },
    { path: "/editpayment", element: <PayMethod /> },
    { path: "/confirm", element: <Confirmation />,},
    { path: "/signup", element: <Register /> },
    { path: "/thanks", element: <ThankYou /> }
  ]);
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}
