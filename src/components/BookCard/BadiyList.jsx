// import { Link } from "react-router-dom";

import Item from "./Item";

// import "./BookCard.scss";

const BadiyList = ({ data }) => {
  if (!data.isFetched) {
    return <div>loading...</div>;
  }

  console.log(data.data);
  return (
    <div className="book-card-list container">
      {data.data.map((book, index) => (
        <Item {...book} key={index} />
      ))}
    </div>
  );
};

export default BadiyList;
