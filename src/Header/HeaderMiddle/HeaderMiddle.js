import { useContext } from "react";
import { Link, Route, Switch } from "react-router-dom";

// import {logo} from '../../assets/icons'
import logo from "../../assets/images/icons/logo.svg";
import AuthContext from "../../context/Auth/context";

import "./HeaderMidl.scss";

const HeaderMiddle = () => {
  const {data,lang} = useContext(AuthContext)
  return (
    <div className="header-middle">
      <div className="header-middle-inner container">
        <Link to="#">
          <img src={logo} alt="" />
        </Link>
        <div className="header-middle-inner-navbar">
          <Link className="header-middle-inner-navbar-link" to="/" >
          {(data.find(i => i.script === lang)).badiiy}
          </Link>
          <Link className="header-middle-inner-navbar-link" to="/religion">
            {
              (data.find(i => i.script === lang)).diniy
            }
          </Link>
          <Link
            className="header-middle-inner-navbar-link"
            to="/darslik"
          >
            {
              (data.find(i => i.script === lang)).darslik
            }
          </Link>
          <Link
            className="header-middle-inner-navbar-link"
            to="/ilmiy"
          > {
            (data.find(i => i.script === lang)).ilmiy
          }

          </Link>
          <Link className="header-middle-inner-navbar-link" to="/auth/form1">

            {
              (data.find(i => i.script === lang)).enter
            }
          </Link>

          <Switch>
            <Route exact patch="/"></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
