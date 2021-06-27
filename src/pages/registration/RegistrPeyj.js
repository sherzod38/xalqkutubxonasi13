import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import RegForm1 from "../../components/regForm1";
import RegForm2 from "../../components/regForm2";
import RegForm3 from "../../components/regForm3";
import RegForm4 from "../../components/regForm4";

import "./RegistrPeyj.scss";

const RegistrPeyj = (props) => {
  const history = useHistory();

  const handleOnClick = (e) => {
    e.preventDefault();
    history.push("/auth/form2");
  };
  return (
    <div className="registr">
      <div className="registr-section container">
        <div className="registr-section-left">
          <h1>Izoh qoldirish uchun akkauntga kiring</h1>
          <p>
            Ro'yhatdan o'tgan bo'lsangiz ismingizni va telefon raqamingizni
            kiriting va kirish tugmasini bosing agar ro'yhatdan o'tmagan
            bo'lsangiz Ro'yhatdan o'tish tugmasini bosing ro'yhatdan o'tishda
            muammo bo'lsa Bog'lanish tugmasini bosing
          </p>
          <div className="registr-section-left-btn">
            <button onClick={handleOnClick} className="registr-section-left-btn-left">
              Ro‘yxatdan o‘tish
            </button>
            <button className="registr-section-left-btn-right">
              Bog‘lanish
            </button>
          </div>
        </div>
        <div className="registr-section-right">
          <Switch>
            <Route path="/auth/form1" exact>
              <RegForm1 />
            </Route>
            <Route path="/auth/form2" exact>
              <RegForm2 />
            </Route>
            <Route path="/auth/form3" exact>
              <RegForm3 />
            </Route>
            <Route path="/auth/form4" exact>
              <RegForm4 />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

RegistrPeyj.propTypes = {};

export default RegistrPeyj;
