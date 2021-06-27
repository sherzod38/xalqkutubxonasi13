// import { Link } from "react-router-dom";

import Item from "./Item";

const IlmiyList = ({ data }) => {
  if (!data.isFetched) {
    return <div>loading...</div>;
  }

 
  return (
    <div className="book-card-list container">
      {data.data.map((book, index) => (
        <Item {...book} key={index} />
      ))}
    </div>
  );
};

export default IlmiyList;
