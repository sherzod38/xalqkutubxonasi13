import React, { useState } from "react";
import AuthContext, { initialAuthContext } from "./context";
import data from "../../components/data/data";

const Provider = ({ children }) => {
  const [value, setValue] = React.useState({ ...initialAuthContext });
  const [lang, setLang] = useState(localStorage.getItem("lang") || "Lotin")

  const setToken = (token) => {
    setValue({ ...value, token });
    localStorage.setItem("token", token);
  };

  const values = {
    value,
    data,
    lang,
    methods: {
      setLang,
      setToken,
    },
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default Provider;
