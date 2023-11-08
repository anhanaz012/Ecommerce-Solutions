import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AppHeader from "../components/AppHeader/AppHeader";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Products from "../pages/ProductsPage/Products";

const RoutesPage = () => {
  return (
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPage;
