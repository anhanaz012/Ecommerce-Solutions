import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import { IMAGES } from "./assets/images";
import AppHeader from "./components/AppHeader/AppHeader";

function App() {
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        console.log("data fetched");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <img src={IMAGES.bgImage} style={{ width: "100%" }} />
      <AppHeader />
    </div>
  );
}

export default App;
