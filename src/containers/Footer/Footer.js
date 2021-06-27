import "./Footer.scss";
import { Link } from "react-router-dom";
import footerlogo from "../../assets/images/footerlogo.svg";
import azonuz from "../../assets/images/icons/azonuz.svg";
import azontravel from "../../assets/images/icons/azontravel.svg";
import azonkitoblari from "../../assets/images/icons/azonkitoblari.svg";
import AuthContext from "../../context/Auth/context";
import { useContext } from "react";

const Footer = () => {
  const {data,lang} = useContext(AuthContext)
  return (
    <footer className="container footer">
      <div className="footer-left">
        <Link to="/" className="footer-link footer-logo-link">
          <img
            className="footer-img footer-logo-img"
            src={footerlogo}
            alt="footer-logo"
          />
        </Link>
        <p className="footer-text footer-copyright">All rights reserved 2020</p>
      </div>
      <div className="footer-center">
        <p className="footer-text bold-text">{(data.find(item => item.script === lang)).project}</p>
        <div className="footer-center-bottom">
          <Link
            to="#"
            className="footer-link"
            onClick={() => {
              window.open("https://www.azon.uz");
            }}
          >
            <img
              className="footer-img azon-site-logo"
              src={azonuz}
              alt="logo"
            />
          </Link>
          <Link
            to="#"
            className="footer-link channel-link"
            onClick={() => {
              window.open("https://azontravel.uz");
            }}
          >
            <img
              className="footer-img azon-channel-logo"
              src={azontravel}
              alt="logo"
            />
          </Link>
          <Link
            to="#"
            onClick={() => {
              window.open("https://www.azonkitoblari.uz");
            }}
            className=" footer-link"
          >
            <img
              className="footer-img azon-travel-logo"
              src={azonkitoblari}
              alt="logo"
            />
          </Link>
        </div>
      </div>
      <div className="footer-right">
        <Link to="/about" className="footer-link about-us">


          {
            (data.find(item => item.script === lang)).about
          }
        </Link>
        <Link to="/connect" className="footer-link">
         {
           (data.find(item => item.script === lang)).aloqa
         }
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
