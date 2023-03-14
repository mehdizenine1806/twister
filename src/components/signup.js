import "../css/signup.css";
import logo from "../img/logo.png";
import Button from "./Button";

const Signup = () => {
    
    return(
        <div className="container">
            <div className="signupForm">
                <img src={logo} alt="logo" className="logo"></img>
                <h1 className="signupTitle">
                    Inscrivez-vous
                </h1>
                <input id="nom" type="text" placeholder="Nom" required></input>
                <input id="prenom" type="text" placeholder="Prénom" required></input>
                <select id="sexe-select" required>
                <option value=""> Renseignez votre sexe </option>
                <option value="F"> Femme </option>
                <option value="H"> Homme </option>
                <option> Ne souhaite pas renseingner </option> 
                </select>
                <label htmlFor="datenaissance"> Date de naissance:</label>
                <input id="datanaissance" type="date" required></input>
                <input id="email" type="text" placeholder="Email" required></input>
                <input id="motdepasse" type="password" placeholder="Mot de passe" required></input>
                <input id="motdepasse" type="password" placeholder="Confirmer le mot de passe" required></input>
                <Button backgroundColor="#1D9BF0" className="signup">
                    S'inscrire
                </Button>
            </div>
        </div>
    )

}

export default Signup;
