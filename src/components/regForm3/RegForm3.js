import { useHistory } from 'react-router-dom'

import "./RegForm3.scss";

const RegForm3 = () => {
    const history = useHistory();

    const handleSubmit = (e) => {
      e.preventDefault();
      history.push("/auth/form4");
    };

  return (
    <div className="form3">
      <form className="form3-form" action="" onSubmit={handleSubmit}>
        <h3>Telefon raqamingizga borgan kodni kiriting va tasdiqlang</h3>
        <input
          className="form3-form-input1"
          type="text"
          placeholder="Ismingiz"
        />
        <input
          className="form3-form-input1"
          type="tel"
          placeholder="Telefon"
        />
        <input
          className="form3-form-input2"
          type="number"
          name=""
          id=""
          placeholder="SMS dagi kod"
        />

        <button className="form3-form-btn1">Tasdiqlash</button>
        {/* <button className="form2-form-btn2">Kirish</button> */}
      </form>
    </div>
  );
};

export default RegForm3;
