import React, { useState, useEffect } from "react";
import { IlmiyList } from "../../components/BookCard";
import axios from "axios";

import API_BASE_URL from "../../constants";
import Pagination from "../../components/Pagination";


const Ilmiy = () => {
  const [bookList, setBookList] = useState({
    isFetched: false,
    data: [],
    error: null,
  });

  const [activePage , setActivePage] = useState(1);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/books/4/${activePage}`)
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
  }
  return <div className="ilmiy">
      <IlmiyList data={bookList}/>
      <Pagination activePage={activePage} setActivePage={activePageChanger}/>
  </div>;
};

export default Ilmiy;
