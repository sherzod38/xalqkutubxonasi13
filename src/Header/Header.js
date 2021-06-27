// import classes from './Header.module.scss'

import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";

const Header = ({searchText, setSearchText}) => {
  return (
    <>
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom {...{ searchText, setSearchText }} />
    </>
  );
};

export default Header;
