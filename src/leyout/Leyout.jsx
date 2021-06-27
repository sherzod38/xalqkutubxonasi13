import HeaderTop from "../Header/HeaderTop";
import HeaderMiddle from "../Header/HeaderMiddle";
import RegistrPeyj from "../pages/registration/RegistrPeyj";

import "./Leyout.scss";

const Leyout = () => {
  return (
    <div className="leyout">
      <HeaderTop />
      <HeaderMiddle />
      <div className="leyout-inner">
        <RegistrPeyj />
      </div>
    </div>
  );
};

export default Leyout;
