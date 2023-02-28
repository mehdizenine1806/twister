import "../../css/login.css";
import Button from "../Button";
import logo from "../../img/logo.png";
import banner from "../../img/banner.png";
const Login = (login , register) => {
  return (
    <div className="loginContainer">
      <div className="bannerContainer">
        <img src={banner} alt="banner"></img>
      </div>
      <div className="formContainer">
        <img src={logo} alt="logo" className="logo"></img>
        <h1 className="banner">Connectez-Vous</h1>
        <div className="form">
          <input id="username" type="email" placeholder="Email"></input>
          <input
            id="password"
            type="password"
            placeHolder="Mot de Passe"
          ></input>
          <p className="forgotPassword">Mot de passe oublié?</p>
          <Button backgroundColor="#1D9BF0" className="btn signin">
            Connexion
          </Button>
          <Button outline="#1D9BF0" className="btn register">
            Inscription
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
