import "../../css/signup.css";
import logo from "../../img/logo.png";
import Button from "../Button";

const Signup = () => {
  return (
    <div className="container">
      <div className="signupForm">
        <img src={logo} alt="logo" className="logo"></img>
        <h1 className="signupTitle">Inscrivez-vous</h1>
        <input id="nom" type="text" placeholder="Nom"></input>
        <input id="prenom" type="text" placeholder="Prénom"></input>
        <select id="sexe-select" required>
          <option value=""> Sexe </option>
          <option value="f"> Femme </option>
          <option value="m"> Homme </option>
          <option value="no"> Ne souhaite pas renseingner </option>
        </select>
        {/* <label htmlFor="datenaissance"> Date de naissance:</label> */}
        <input id="birthday" type="date"></input>
        <input id="email" type="text" placeholder="Email"></input>
        <input id="password" type="password" placeholder="Mot de passe"></input>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirmation"
        ></input>
        <Button backgroundColor="#1D9BF0" className="signup">
          S'inscrire
        </Button>
      </div>
    </div>
  );
};

export default Signup;
