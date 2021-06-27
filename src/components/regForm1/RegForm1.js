import { useHistory } from "react-router-dom";
import { useRef, useContext } from "react";
import axios from "axios";
import AdminPanel from "../../context/Auth/context";
import "./RegForm1.scss";

const RegForm1 = () => {
  const loginRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();
  const { methods } = useContext(AdminPanel);

  // const handleSubmit2 = (e) => {
  //   e.preventDefault();
  //   history.push("/auth/form2");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      loginRef.current &&
      loginRef.current.value &&
      passwordRef.current &&
      passwordRef.current.value
    ) {
      axios
        .post("https://reqres.in/api/login", {
          email: loginRef.current.value,
          password: passwordRef.current.value,
        })
        .then(function ({ data }) {
          methods.setToken(data.token);
          history.push("/admin");
        })
        .catch(function (error) {
            history.push("/auth/form2");

        });
    }
  };

  return (
    <div className="form1">
      <form className="form1-form" onSubmit={handleSubmit}>
        <h3>Ismingiz va telefon raqamingizni kiriting</h3>
        <input
          ref={loginRef}
          className="form1-form-input1"
          type="text"
          placeholder="Ismingiz"
        />
        <input
          ref={passwordRef}
          className="form1-form-input2"
          type="tel"
          name=""
          id=""
          placeholder="Telefon"
        />
        <button>Kirish</button>
      </form>
    </div>
  );
};

export default RegForm1;
