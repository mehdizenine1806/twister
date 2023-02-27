import "../../css/login.css";
import Button from "../Button";
import logo from "../../img/logo.png";
const Login = () => {
  return (
    <div className="loginContainer">
      <div className="formContainer">
        <img src={logo} alt="logo" className="logo"></img>
        <h1 className="banner">
          Rejoignez des<br></br>Millions de personnes
        </h1>
        <input id="username" type="text" placeHolder="Email"></input>
        <input id="password" type="password" placeHolder="Mot de Passe"></input>
        <p className="forgotPassword">Mot de passe oublié?</p>
        <Button backgroundColor="#1D9BF0" className="signin">
          Connexion
        </Button>
        <Button outline="#1D9BF0" className="register">
          Inscription
        </Button>
      </div>
    </div>
  );
};

export default Login;
