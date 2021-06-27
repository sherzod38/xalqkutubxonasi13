// import { useEffect, useState } from "react";

// import axios from "axios";

import { Link, useLocation } from "react-router-dom";

import API_BASE_URL from "../../constants";


import img1 from "../../assets/images/rasm1.png";
// import like from '../../assets/images/icons/like.svg'
import facebook from "../../assets/images/icons/facebook.svg";
import instagram from "../../assets/images/icons/instagram.svg";
import telegram from "../../assets/images/icons/telegram.svg";
// import user from '../../assets/images/icons/user.png'
import SearchPage from "../searchPage";
import "./BookPages.scss";
import moment from "moment";
const BookPages = () => {
  const { state } = useLocation();
  console.log(state.props);
  const { ...props } = state.props;
  //   const {...params} = state.props
  //   const { id } = useParams();
  //   console.log(state);
  //   const [book, setBook] = useState({
  //     isFetched: false,
  //     data: {},
  //     error: null,
  //   });

  //   useEffect(() => {
  //     axios
  //       .get(`${API_BASE_URL}/api/books/3/${id}`, {})
  //       .then(function (response) {
  //         setBook({
  //           isFetched: true,
  //           data: response.data,
  //           error: false,
  //         });
  //       })
  //       .catch(function (error) {
  //         setBook({
  //           isFetched: true,
  //           data: [],
  //           error: error,
  //         });
  //       });
  //   }, [id]);
    // console.log(book);

  return (
    <div className="book">
      <div className="book-inner container">
        <div className="book-inner-location">
          <p>Badiiy kitoblar | Otamdan qolgan dalalar</p>
        </div>
        <div className="book-inner-block">
          <div className="book-inner-block-left">
            <h4>Taklif qilamiz</h4>
            <SearchPage className="book-inner-block-left-item" />
            <button>barchasini ko‘rish</button>
          </div>
          <div className="book-inner-block-right">
            <p className="book-inner-block-right-sana">
              Qo’shilgan sana:{" "}
              {moment(props.added).format("DD/MM/YY | HH:MM:SS")}
            </p>
            <div className="book-inner-block-right-row">
              <div className="book-inner-block-right-row-information">
                <div className="book-inner-block-right-row-information-left">
                  <img className="book-inner-block-right-row-information-left-img" src={props.img ? `${API_BASE_URL}/images/${props.img}` : img1} alt="" />
                  {/* <span>{props.img}</span> */}
                </div>
                <div className="book-inner-block-right-row-information-right">
                  <h2 className="book-inner-block-right-row-information-right-title">
                    {props.title}
                  </h2>
                  <div className="book-inner-block-right-row-information-right-author">
                    <div className="book-inner-block-right-row-information-right-author-authors">
                      <span>Muallif:</span>
                      <p>{props.author}</p>
                    </div>
                    <div className="book-inner-block-right-row-information-right-author-authors">
                      <span>Hajmi:</span>
                      <p>{props.page} bet</p>
                    </div>
                    <div className="book-inner-block-right-row-information-right-author-authors">
                      <span>Nashr qilingan yili:</span>
                      <p>{props.release}</p>
                    </div>
                  </div>
                  <div className="book-inner-block-right-row-information-right-author">
                    
                    {/* <div className="book-inner-block-right-row-information-right-author-authors">
                      <span>Ko’rishlar soni:</span>
                      <p>1802 marta</p>
                    </div> */}
                    {/* <div className="book-inner-block-right-row-information-right-author-authors">
                                            <span>Holat:</span>
                                            <h3 className="book-inner-block-right-row-information-right-author-authors-busu">Bo’sh</h3>
                                        </div> */}
                    {/* <div className="book-inner-block-right-row-information-right-author-authors">
                                            <span>Yoqtirishlar:</span>
                                            <p>32 ta</p>
                                        </div> */}
                  </div>
                  {/* <div className="book-inner-block-right-row-information-right-h2">
                                        <img src={like} alt="" />
                                        <p>Yoqdi</p>
                                    </div> */}
                  <a href="tel:+998951435550">
                    <button className="book-inner-block-right-row-information-right-btn">
                      Band qilish
                    </button>
                  </a>
                </div>
              </div>
              <h3 className="book-inner-block-right-row-summary">
                Kitob tavsifi
              </h3>
              <p className="book-inner-block-right-row-text">{props.summary}</p>
              <div className="book-inner-block-right-row-comment">
                {/* <div className="book-inner-block-right-row-comment-left">
                                <h5>Izoh qoldiring!</h5>
                                <label className="book-inner-block-right-row-comment-left-label" htmlFor="t1">
                                
                                    <input type="text" id='t' name='t1' placeholder='Izoh qoldiring!' />
                                </label>
                            </div> */}
                <div className="book-inner-block-right-row-comment-right">
                  <h6>Do‘stlaringizga ulashing</h6>
                  <div className="book-inner-block-right-row-comment-right-mesengs">
                    <Link
                      onClick={() => {
                        window.open("https://www.facebook.com");
                      }}
                      className="book-inner-block-right-row-comment-right-mesengs-link"
                    >
                      <img
                        className="book-inner-block-right-row-comment-right-mesengs-link-img"
                        src={facebook}
                        alt=""
                      />
                    </Link>
                    <Link
                      onClick={() => {
                        window.open("https://www.instagram.com");
                      }}
                      className="book-inner-block-right-row-comment-right-mesengs-link"
                    >
                      <img
                        className="book-inner-block-right-row-comment-right-mesengs-link-img"
                        src={instagram}
                        alt=""
                      />
                    </Link>
                    <Link
                      onClick={() => {
                        window.open("https://www.t.me/Azonkitoblari");
                      }}
                      className="book-inner-block-right-row-comment-right-mesengs-link"
                    >
                      <img
                        className="book-inner-block-right-row-comment-right-mesengs-link-img"
                        src={telegram}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
              {/* <div className="book-inner-block-right-row-user">
                            <img src={user} alt="" />
                            <div className="book-inner-block-right-row-user-name">
                                <h3 className="book-inner-block-right-row-user-name-names">Bobur Mavlonov</h3>
                                <p className="book-inner-block-right-row-user-name-comments">Siz hozircha izoh qoldirmagansiz</p>
                            </div>
                        </div>
                        <div className="book-inner-block-right-row-users">
                            <span className="book-inner-block-right-row-users-counts">567 Izoh</span>
                            <div className="book-inner-block-right-row-users-comments">
                                <div className="book-inner-block-right-row-users-comments-img">
                                    <img src={user} alt="" />
                                </div>
                                <div className="book-inner-block-right-row-users-comments-info">
                                    <div className="book-inner-block-right-row-users-comments-info-name">
                                        <h4>Abdumalik Kalandarov</h4>
                                        <span>30/03/2021</span>
                                    </div>
                                    <p>
                                        Dolor sit amet, consectetur
                                        adipiscing elit. Nullam duis
                                        blandit commodo consectetur 
                                        lorem quis tristique 
                                        consectetur duis leo mattis est.
                                    </p>
                                </div>
                            </div>
                            <div className="book-inner-block-right-row-users-comments">
                                <div className="book-inner-block-right-row-users-comments-img">
                                    <img src={user} alt="" />
                                </div>
                                <div className="book-inner-block-right-row-users-comments-info">
                                    <div className="book-inner-block-right-row-users-comments-info-name">
                                        <h4>Javohir Jaloliddinov</h4>
                                        <span>20/05/2021</span>
                                    </div>
                                    <p>
                                        Dolor sit amet, consectetur adipiscing
                                        elit. lorem quis tristique consectetur
                                        duis leo mattis est.
                                    </p>
                                </div>
                            </div>
                            <div className="book-inner-block-right-row-users-comments">
                                <div className="book-inner-block-right-row-users-comments-img">
                                    <img src={user} alt="" />
                                </div>
                                
                                <div className="book-inner-block-right-row-users-comments-info">
                                    <div className="book-inner-block-right-row-users-comments-info-name">
                                        <h4>Ubaydullayev Abdulaziz</h4>
                                        <span>12/05/2020</span>
                                    </div>
                                    <p>
                                        Mullam duis blandit commodo lorem
                                        quis tristique consectetur duis
                                        leo mattis est.
                                    </p>
                                </div>
                            </div>
                        </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPages;
