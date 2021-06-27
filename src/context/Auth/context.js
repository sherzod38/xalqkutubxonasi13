import React from "react";

export const initialAuthContext = {
  password: "cityslicka",
  token: localStorage.getItem("token") || "",
};

const AuthContext = React.createContext(initialAuthContext);
export default AuthContext;