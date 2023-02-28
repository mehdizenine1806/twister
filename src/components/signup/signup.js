import "../../css/signup.css";
import logo from "../../img/logo.png";
import Button from "../Button";

const Signup = () => {
    
    return(
        <div className="SignupContainer">
            <form className="SignupForm">
                <img src={logo} alt="logo" className="logo"></img>
                <h1 className="SignupTitle">
                    Inscrivez-vous
                </h1>
                <input id="nom" type="text" placeholder="Nom"></input>
                <input id="prenom" type="text" placeholder="Prénom"></input>
                <select id="sexe-select">
                <option> Renseignez votre sexe </option>
                <option> Femme </option>
                <option> Homme </option>
                <option> Ne souhaite pas renseingner </option> 
                </select>
                <label htmlFor="datenaissance"> Date de naissance:</label>
                <input id="datanaissance" type="date"></input>
                <input id="email" type="text" placeholder="Email"></input>
                <input id="motdepasse" type="password" placeholder="Mot de passe"></input>
                <Button backgroundColor="#1D9BF0" className="signup">
                    Envoyer
                </Button>
            </form>
        </div>
    )

}

export default Signup;