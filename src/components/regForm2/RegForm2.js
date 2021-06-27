import { useHistory } from "react-router-dom";

import "./RegForm2.scss";

const RegForm2 = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/auth/form3");
  };
  return (
    
    <div className="form2">
      <form className="form2-form" action="" onSubmit={handleSubmit}>
        <h3>
          Ro'fyhatdan o'tish uchun ismingiz
           va telefon raqamingizni kiriting
           keyin tasdiqlang
        </h3>
        <input
          className="form2-form-input1"
          type="text"
          placeholder="Ismingiz"
        />
        <input
          className="form2-form-input2"
          type="tel"
          name=""
          id=""
          placeholder="Telefon"
        />
        <button className="form2-form-btn1">Tasdiqlash</button>
        {/* <button className="form2-form-btn2">Kirish</button> */}
      </form>
    </div>
  );
};

export default RegForm2;
