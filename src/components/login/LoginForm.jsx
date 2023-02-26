import Button from "../Button";
import logo from "../../img/logo.png";
import "../../css/login.css";
const LoginForm = () => {
  return (
    <div className="loginContainer">
      <div className="loginHeader">
        <img src={logo} alt="logo"></img>
        <span>
          Pas de compte? <span className="registerLink">Inscription</span>
        </span>
      </div>
      <h1>
        Mettez un pas <br></br>dans un nouveau monde
      </h1>
      <div className="formContainer">
        <h3>Plonger dans Twister</h3>
        <input id="username" type="text" placeHolder="Email"></input>
        <input id="password" type="password" placeHolder="Mot de Passe"></input>
        <p className="forgotPassword">Mot de passe oublié?</p>
        <Button color="#1D9BF0">Connexion</Button>
      </div>
    </div>
  );
};

export default LoginForm;
