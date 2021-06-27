import { useContext } from "react";
// import { useHistory } from "react-router-dom";



import AuthContext from "../../context/Auth/context";


import "./HeaderBottom.scss";


const HeaderBottom = ({searchText, setSearchText}, id) => {
  const {data,lang} = useContext(AuthContext)
  // const history = useHistory();
  // function handleClick() {
  //   history.push(`/book/${id}`);
  // }
  return (
    <div className="header-bottom">
      <div className="header-bottom-inner container">
        <div className="header-bottom-inner-block">
          <label className="header-bottom-inner-block-label" htmlFor="search">
            <input
              className="header-bottom-inner-block-label-input"
              type="text"
              id="search"
              name="main_search"
              placeholder={(data.find(i => i.script === lang)).search}
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
          </label>
          <button className="header-bottom-inner-block-button" type="button" /*onClick={handleClick}*/>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="9.80544" cy="9.8055" rx="7.49047" ry="7.49047" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.0152 15.4043L17.9519 18.3333" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <select className="header-bottom-inner-select" name="book_type_select" id="book-type-select">
          <option
            className="header-bottom-inner-select-option"
            value="fiction"
          >
              {
                (data.find(i => i.script === lang)).badiiy
              }
          </option>
          <option
            className="header-bottom-inner-select-option"
            value="religious"
          >
             {
               (data.find(i => i.script === lang)).diniy
             }

          </option>
          <option
            className="header-bottom-inner-select-option"
            value="textbook"
          >
            {
              (data.find(i => i.script === lang)).darslik
            }
          </option>
          <option
            className="header-bottom-inner-select-option"
            value="scientific">
            {
              (data.find(i => i.script === lang)).ilmiy
            }
          </option>
        </select>
        <select className="header-bottom-inner-select" name="change_language_select" id="change-language_select">
          <option className="header-bottom-inner-select-option" value="uzbek">
            {
              (data.find(i => i.script === lang)).uz
            }
          </option>
          <option className="header-bottom-inner-select-option" value="arabic">

               {
                 (data.find(i => i.script === lang)).arab
               }
          </option>
          <option className="header-bottom-inner-select-option" value="russia">

               {
                 (data.find(i => i.script === lang)).rus
               }
          </option>
          <option className="header-bottom-inner-select-option" value="english">

               {
                 (data.find(i => i.script === lang)).eng
               }
          </option>
        </select>
      </div>
    </div>
  );
};

export default HeaderBottom;
