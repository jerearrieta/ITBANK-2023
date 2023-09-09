import './login.css'
import Izquierda from "./components/Izquierda";
import Derecha from "./components/Derecha";
import { useEffect } from 'react';

const Login = () => {
  useEffect(() => {
    localStorage.setItem("userLoggedIn", false);
  }, [])

  return (
    <div className="conteiner">
      <Izquierda />
      <Derecha />
    </div>
  );
};

export default Login;
