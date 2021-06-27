import React, { useState, useEffect } from "react";
import { DarslikList } from "../../components/BookCard";
import axios from "axios";

import API_BASE_URL from "../../constants";
import Pagination from "../../components/Pagination";

const Darslik = () => {
  const [bookList, setBookList] = useState({
    isFetched: false,
    data: [],
    error: null,
  });
  const [activePage, setActivePage] = useState(1);
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/books/3/${activePage}`)
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
    <div className="ilmiy">
      <DarslikList data={bookList} />
      <Pagination activePage={activePage} setActivePage={activePageChanger} />
    </div>
  );
};

export default Darslik;
