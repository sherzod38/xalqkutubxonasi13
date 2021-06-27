

import Item from "./Item";

const SearchList = ({ data }) => {
  if (!data.isFetched) {
    return <div>loading...</div>;
  }

 
  return (
    <div className="">
      {data.data.map((book, index) => (
        <Item {...book} key={index} />
      ))}
    </div>
  );
};

export default SearchList;
