import React from "react";
import './login.css'
import Izquierda from "./components/Izquierda";
import Derecha from "./components/Derecha";

const Login = () => {
  return (
    <>
      <div className="conteiner">
        <Izquierda />
        <Derecha />
      </div>
    </>
  );
};

export default Login;
