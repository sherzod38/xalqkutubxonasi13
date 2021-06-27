import React from "react";
// import { Link } from 'react-router-dom'
// import PropTypes from "prop-types";
import "./Admin.scss";
import API_BASE_URL from "../constants";

function Admin(props) {
  return (
    <div className="adminka">
      <h2>Book add page</h2>
      <form
        className="adminka-form container"
        id="form"
        action={API_BASE_URL + "/api/books"}
        method="POST"
        encType="multipart/form-data"
      >
        <label htmlFor="">
          Kitob Muallifi
          <input
            className="adminka-form-author"
            type="text"
            name="author_name"
            placeholder="author_name"
            required
          />
        </label>
        <label htmlFor="file">
          Kitob_rasmi
        <input
          className="adminka-form-img"
          type="file"
          name="book_img"
          id='file'
          placeholder="book_img"
          required
        />
        {/* <span>rasm qo'shish</span> */}
        </label>
        <label htmlFor="">
          Kitob nomi
        <input
          className="adminka-form-title"
          type="text"
          name="book_title"
          placeholder="book_title"
          required
        />
        </label>
        <label htmlFor="">
          kitob chiqqan yili
        <input
          className="adminka-form-year"
          type="number"
          name="book_release_year"
          placeholder="book_release_year"
          required
        />
        </label>
        <label htmlFor="">
          Kitob sahifasi soni
          <input
          className="adminka-form-pages"
          type="number"
          name="book_pages"
          placeholder="book_pages"
          required
        />
        </label>
        <label htmlFor="">
          Kitob haqida
        <input
          className="adminka-form-summary"
          type="text"
          name="book_summary"
          placeholder="book_summary"
          required
        />
        </label>
        <label htmlFor="">
          Kitobni Tili
        <input
          className="adminka-form-language"
          type="text"
          name="book_language"
          placeholder="book_language"
          required
        />
        </label>
        <label htmlFor="">
          Kitob soni
        <input
          className="adminka-form-count"
          type="number"
          name="book_count"
          placeholder="book_count"
          required
        />
        </label>
        <label htmlFor="">
          kitob qaysi bo'limga tegishli
        <select name="book_type" className="adminka-form-select">
          <option value="1">badiy </option>
          <option value="2">diniy </option>
          <option value="3">darsik </option>
          <option value="4">ilmiy </option>
          <option value="0">undefined </option>
        </select>
        </label>
        <label htmlFor="">
          kitobni bazaga joylash 
          <button className="adminka-form-btn">submit</button>
        </label>
      </form>
    </div>
  );
}

Admin.propTypes = {};

export default Admin;
