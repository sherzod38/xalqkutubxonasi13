import React, { useState, useEffect } from "react";
import { List } from "../../components/BookCard";
import axios from "axios";

import API_BASE_URL from "../../constants";
import Pagination from "../../components/Pagination";

export default function Religion() {
  const [bookList, setBookList] = useState({
    isFetched: false,
    data: [],
    error: null,
  });
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/books/2/${activePage}`)
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
    //   .then(function () {
    // always executed
    //   });
  }, [activePage]);
  const activPageChanger = (page) => {
    setActivePage(page);
  };

  return (
    <div>
      <List data={bookList} />
      <Pagination activePage={activePage} setActivePage={activPageChanger}/>
    </div>
  );
}
