import React, { useEffect, useState } from "react";
import AppCard from "../../components/AppCard/AppCard";
import axios from "axios";
import Pagination from "../../components/Pagination/Pagination";
import styled from "styled-components";
import { FONTS } from "../../theme";

const CategoriesContainer = styled.div`
  height: 50px;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Text = styled.h1`
  color: black;
  font-family: ${FONTS.julius};
  text-align: center;
`;
const FilterItem = styled.button`
  height: 45px;
  width: auto;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border: 1px solid black;
  font-weight: lighter;
  border-radius: 20px;
  font-size: 16px;
  font-family: ${FONTS.archivo};
  margin: 10px;
`;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postsPerPage] = useState(4);
  const [pageNumber, setPageNumber] = useState(1);
  const [categories, setCategories] = useState([]);
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
          const categories = res.data.products.map((item) => {
            return item.category;
          });
          const allCategories = [...new Set(categories)];
          setCategories(allCategories);
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
    } else if (pageNumber === 1) {
      setPageNumber(totalPages);
    }
  };

  const filterByCategory = (item) => {
    const filteredItems = products.filter((product) => {
      return product.category === item;
    });
    setProducts(filteredItems);
  };

  const getCurrentPageHandler = (item) => {
    setPageNumber(item);
  };
  return (
    <>
      <Text>Featured Products</Text>
      {/* <CategoriesContainer>
        <FilterItem>All</FilterItem>
        {categories.map((item) => {
          return (
            <FilterItem
              key={item}
              onClick={() => {
                filterByCategory(item);
              }}
            >
              {item}
            </FilterItem>
          );
        })}
      </CategoriesContainer> */}

      <AppCard
        data={currentPosts}
        prevPageHandler={prevPageHandler}
        nextFunctionHandler={nextPageHandler}
      />
      {/* <Pagination
        currentPage={pageNumber}
        totalPages={totalPages}
        postsPerPage={postsPerPage}
        onClick={(item) => {
          getCurrentPageHandler(item);
        }}
      /> */}
    </>
  );
};

export default Products;
