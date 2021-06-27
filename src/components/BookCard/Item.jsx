// import { useState } from "react";
import { Link } from "react-router-dom";
import { Views, Like } from "../../assets/icons/Icons";
import imgs from "../../assets/images/rasm.png";
import API_BASE_URL from "../../constants";

const Item = (props) => {
  // {`/book/${id}`}
  return (
    <div className="book-card" key={props.id}>
      <Link
        className="book-card-link"
        to={{
          pathname: `/book/${props.id}`,
          state: {
            props,
          },
        }}
      >
        <img
          className="book-card-img"
          src={props.img ? `${API_BASE_URL}/images/${props.img}` : imgs}
          alt=""
        />
        <h3 className="book-card-name">{props.title}</h3>
        <p className="book-card-authors">
          {props.author ? props.author : "Muallifi"}
          {/* <span className="book-card-views-like">{vote_average}</span> */}
        </p>
        <p className="book-card-author">
          <span className="book-card-author-views">
            <Views />
          </span>
          <span className="book-card-author-vote_count">
            {props.vote_count}
          </span>
          <span className="book-card-author-like">
            <Like />
          </span>
          <span className="book-card-author-vote_avarage">
            {props.vote_average}
          </span>
        </p>
      </Link>
    </div>
  );
};

export default Item;
