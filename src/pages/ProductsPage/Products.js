import React, { useEffect, useState } from "react";
import AppCard from "../../components/AppCard/AppCard";
import axios from "axios";
import Pagination from "../../components/Pagination/Pagination";

const Products = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);
  const [postsPerPage] = useState(4);
  const [pageNumber, setPageNumber] = useState(1);
  const indexOfLastPost = pageNumber * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(products.length / postsPerPage);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          setProducts(res.data.products);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    };
    getProducts();
  }, []);

  const nextPageHandler = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
    } else if (pageNumber === totalPages) {
      setPageNumber(1);
    }
  };
  const prevPageHandler = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      console.log("greater than 1 ");
    } else if (pageNumber === 1) {
      setPageNumber(totalPages);
    }
  };

  return (
    <>
      <AppCard
        data={currentPosts}
        prevPageHandler={prevPageHandler}
        nextFunctionHandler={nextPageHandler}
      />
      <Pagination
        currentPage={pageNumber}
        totalPages={totalPages}
        postsPerPage={postsPerPage}
        onClick={(item) => {
          setPageNumber(item);
        }}
      />
    </>
  );
};

export default Products;
