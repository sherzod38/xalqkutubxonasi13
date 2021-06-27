import { useHistory } from 'react-router-dom'

import "./RegForm4.scss";

const RegForm4 = () => {

  const history = useHistory()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/')
  }
  return (
    <div className="form4">
      <form className="form4-form" action="" onSubmit={handleSubmit}>
        <h3>Siz ro'yhatdan o'tdingiz</h3>
        <input
          className="form4-form-input1"
          type="text"
          placeholder="Ismingiz"
        />
        <input
          className="form4-form-input1"
          type="tel"
          placeholder="Telefon"
        />
        <input
          className="form4-form-input2"
          type="number"
          name=""
          id=""
          placeholder="SMS dagi kod"
        />
        <p>Raqam muvaffaqiyatli tasdiqlandi</p>

        {/* <button className="form4-form-btn1">Tasdiqlash</button> */}
        <button className="form4-form-btn2">Kirish</button>
      </form>
    </div>
  );
};

export default RegForm4;
