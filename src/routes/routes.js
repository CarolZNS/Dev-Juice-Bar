import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../views/Home";
import About from "../views/About";
import Product from "../views/Product";
import Recipes from "../views/Recipes";
import Profile from "../views/Profile";
import Cart from "../views/Cart";
import Contact from "../views/Contact";
import Favorites from "../views/Favorites";
import Login from "../views/Login";
import Configurations from "../views/Configurations";
import PayMethod from "../views/PayMethod";
import Confirmation from "../views/Confirmation";

const Routers = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Profile />} path="/profile" />
      <Route element={<About />} path="/about" />
      <Route element={<Recipes />} path="/recipes" />
      <Route element={<Product />} path='/product' />
      <Route element={<Cart />} path='/cart' />
      <Route element={<Contact />} path='/contact' />
      <Route element={<Favorites />} path='/favorites' />
      <Route element={<Login />} path='/login' />
      <Route element={<Configurations />} path='/config' />
      <Route element={<PayMethod />} path='/editpayment' />
      <Route element={<Confirmation />} path='/confirm' />
    </Routes>
  );
};

export default Routers;
