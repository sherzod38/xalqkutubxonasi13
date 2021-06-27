import React, { useState, useEffect } from "react";
import { BadiyList } from "../../components/BookCard";
import axios from "axios";

import API_BASE_URL from "../../constants";
import Pagination from "../../components/Pagination";

import "./Badiy";

const Badiy = () => {
  const [bookList, setBookList] = useState({
    isFetched: false,
    data: [],
    error: null,
  });
  const [activePage, setActivePage] = useState(1);
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/books/1/${activePage}`)
      .then(function (response) {
        setBookList((prev) => ({
          isFetched: true,
          data: [...prev.data, ...response.data],
          error: false,
        }));
      })
      .catch(function (error) {
        setBookList({
          isFetched: true,
          data: [],
          error: error,
        });
      });
  }, [activePage]);
  const activePageChanger = (page) => {
    setActivePage(page);
  };

  return (
    <div className="badiy">
      <BadiyList data={bookList} />
      <Pagination activePage={activePage} setActivePage={activePageChanger} />
    </div>
  );
};

export default Badiy;
