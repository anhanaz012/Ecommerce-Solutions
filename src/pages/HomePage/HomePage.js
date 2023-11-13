import React from "react";
import { FONTS } from "../../theme";
import Products from "../ProductsPage/Products";
import AboutUs from "../AboutUs/AboutUs";

const HomePage = () => {
  const myHeading = {
    color: "green",
    fontSize: "35px",
    fontFamily: FONTS.default,
    position: "absolute",
    top:'20%',
  };
  return (
    <>
      {/* <img
        src={"https://www.hostgator.com/blog/wp-content/uploads/2020/08/Types-of-eCommerce-Websites-1024x538.jpg"}
        style={{ height: "100vh", width: "100%" }}
      />
     <Products/>
     <AboutUs/> */}
    </>
  );
};

export default HomePage;
