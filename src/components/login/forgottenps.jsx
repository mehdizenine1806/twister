import "../../css/forgotten.css";
import logo from "../../img/logo.png";
import Button from "../Button";

const Forgotten =() =>{
    return(
    <div className="forgottenContainer">
    <div className="forgottenForm">
    <img src={logo} alt="logo" className="logo"></img>
    <h1 className="forgottenTitle">
        Nouveau mot de passe
    </h1>
    <input id="email" type="text" placeholder="Email" required></input>
    <input id="motdepasse" type="password" placeholder="Nouveau mot de passe" required></input>
    <input id="motdepasse" type="password" placeholder="Confirmer le nouveau mot de passe" required></input>
    <Button backgroundColor="#1D9BF0" className="envoyer">
        Envoyer
    </Button>
    </div>
    </div>)
}

export default Forgotten;