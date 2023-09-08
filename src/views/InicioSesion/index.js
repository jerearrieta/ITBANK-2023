import React from "react";
import './login.css'
import Izquierda from "./components/Izquierda";
import Derecha from "./components/Derecha";

const Login = () => {
  return (
    <>
      <main classname="conteiner">
        <Izquierda />
        <Derecha />
      </main>
    </>
  );
};

export default Login;
