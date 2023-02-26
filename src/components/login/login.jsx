import "../../css/login.css";
import LoginForm from "./LoginForm";
import LoginBanner from "./LoginBanner";
const Login = () => {
  return (
    <div className="container">
      <LoginBanner></LoginBanner>
      <LoginForm></LoginForm>
    </div>
  );
};

export default Login;
