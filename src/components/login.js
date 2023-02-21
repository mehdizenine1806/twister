import "../css/login.css";
const Login = () => {
  return (
    <div className="loginContainer">
      <input
        id="username"
        type="text"
        placeholder="Nom d'utilisateur"
        className="formStyle formInput"
      ></input>
      <input
        id="password"
        type="password"
        placeholder="Mot de passe"
        className="formStyle formInput"
      ></input>
      <button
        className="formStyle btn blue"
        onClick={() => {
          console.log("Button Clicked");
        }}
      >
        Connexion
      </button>
    </div>
  );
};

export default Login;
