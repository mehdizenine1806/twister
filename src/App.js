import "./css/App.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Forgotten from "./components/forgottenps";

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

  const didForgot = () => {
    setForgotten(!forgotten);
  }
  return connect?<div>Hello</div>:(!register? (!forgotten ? <Login login = {getConnected} register={getRegistered} forgotten={didForgot}></Login> : <Forgotten></Forgotten>) :<Signup></Signup>);
}
export default App;
