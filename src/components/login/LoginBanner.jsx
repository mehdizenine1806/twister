import loginBanner from "../../img/loginBanner.png";
import "../../css/login.css";
const LoginBanner = () => {
  return (
    <div className="bannerContainer">
      <div className="bannerHeader">
        <h1>Restez Connectés au Monde</h1>
        <p>Rejoignez des millions de personnes sans attendre</p>
      </div>
      <img src={loginBanner} alt=""></img>
    </div>
  );
};

export default LoginBanner;
