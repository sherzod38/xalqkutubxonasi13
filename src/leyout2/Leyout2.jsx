import HeaderTop from "../Header/HeaderTop";
import HeaderMiddle from "../Header/HeaderMiddle";
import BookPages from "../pages/bookPages";
import Footer from "../containers/Footer";

import "./Leyout2.scss";

const Leyout2 = () => {
  return (
    <div className="leyout2">
      <HeaderTop />
      <HeaderMiddle />
      <div className="leyout2-inner">
        <BookPages />
      </div>
      <Footer />
    </div>
  );
};

export default Leyout2;
