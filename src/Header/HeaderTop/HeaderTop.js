import { Link  } from "react-router-dom";
import { useContext } from "react";
import "./HeaderTop.scss";

import Hour from "../../components/Hour/Hour";
import Darkmout from "../../components/Darkmout";
import Language from "../../components/Language/Language";
import AuthContext from "../../context/Auth/context";



// const Facebook = "https://facebook.com";
// const Instagram = "https://instagram.com";

const HeaderTop = () => {
  const {data,lang} = useContext(AuthContext)
  return (
    <div className="header">
      <div className="header-inner container">
        <div className="header-inner-left">
          < Hour city = {
            (data.find(i => i.script === lang)).city
          }
          />
        </div>
        <div className="header-inner-right">
          <Language />
          <Darkmout rounded={true} rejim1={(data.find(i => i.script === lang)).day}
          rejim2 = {
            (data.find(i => i.script === lang)).night
          }
           />
          <Link className="header-inner-right-link" to='#'>
           {(data.find( i => i.script === lang)).facebook}
          </Link>
          <Link className="header-inner-right-link" to="#">

            {
              (data.find(i => i.script === lang)).telegram
            }
          </Link>
          <Link className="header-inner-right-link" to='#'>

            {
              (data.find(i => i.script === lang)).instagram
            }
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
