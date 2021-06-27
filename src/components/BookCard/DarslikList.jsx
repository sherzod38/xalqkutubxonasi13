// import { Link } from "react-router-dom";

import Item from "./Item";

const DarslikList = ({ data }) => {
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

export default DarslikList;
