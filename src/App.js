import { lazy, useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";

import Content from "./containers/Content";
import Footer from "./containers/Footer";

import Admin from "./admin/Admin";

import Ilmiy from "./pages/ilmiy/Ilmiy";
import Badiy from "./pages/badiy/Badiy";
import Darslik from "./pages/darslik/Darslik";
import Leyout from "./leyout";
import * as AuthContext from "./context/Auth";
import BookPages from "./pages/bookPages/BookPages";
import Leyout2 from "./leyout2";
import SearchPage from "./pages/searchPage";

import "./assets/styles/main.scss";
// import Show from "./components/show";

const Religion = lazy(() => import("./pages/Religion"));

function App() {
  const [searchText, setSearchText] = useState("");


  return (
    <div className="App">
      <AuthContext.Provider>
        <Router>
          <Switch>
            <Route path="/auth">
              <Leyout />
            </Route>
            <Route path="/book/:id">
              <Leyout2 />
            </Route>
            <Route>
              <div className="main-layout">
                <Header searchText={searchText} setSearchText={setSearchText} />
                <Content>
                  <Route path="/book-info/:searchText">
                    <SearchPage />
                  </Route>
                  <Route path="/" exact>
                    <Badiy />
                  </Route>
                  <Route path="/religion" exact>
                    <Religion />
                  </Route>
                  <Route path="/darslik" exact>
                    <Darslik />
                  </Route>
                  <Route path="/ilmiy" exact>
                    <Ilmiy />
                  </Route>
                  <Route path="/admin" exact>
                    <Admin />
                  </Route>
                  <Route path="/book-info">
                    <BookPages />
                  </Route>
                {/* <Show/> */}
                </Content>
                <Footer />
              </div>
            </Route>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
