import "./css/App.css";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Forgotten from "./components/login/forgottenps";

import { useState } from "react";


function App() {
  const [register, setRegister] = useState(false);
  const [connect, setConnect] = useState(false); 
  const [forgotten, setForgotten] = useState(false);

  const getRegistered = () => {
    setRegister(!register);
  };

  const getConnected = () => {
    setConnect(!connect);
  };

  return connect?<div>Hello</div>:(!register?<Login login = {getConnected} register={getRegistered}></Login>:<Signup></Signup>);
}
export default App;
