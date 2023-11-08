import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import RoutesPage from "./routes";

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
  return <RoutesPage />;
}

export default App;
