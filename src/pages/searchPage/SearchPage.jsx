import React, { useState, useEffect } from "react";
import { SearchList } from "../../components/BookCard";
import axios from "axios";

import API_BASE_URL from "../../constants";

const SearchPage = () => {
  const [bookList, setBookList] = useState({
    isFetched: false,
    data: [],
    error: null,
  });
  // console.log(bookList.data);
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/books/4`, {})
      .then(function (response) {
        setBookList({
          isFetched: true,
          data: response.data.slice(0, 3),
          error: false,
        });
      })
      .catch(function (error) {
        setBookList({
          isFetched: true,
          data: [],
          error: error,
        });
      });
  }, []);
  return (
    <div className="search">
      <SearchList data={bookList} />
    </div>
  );
};

export default SearchPage;
