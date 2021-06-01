import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../shared/store/slice/appSlice";
import { doLogin } from "../../shared/store/slice/authSlice";
import "./login.scss";
const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      doLogin({ username: "sss", password: "aaa" }, () => {
        window.location.href = "/#/dashboard";
      })
    );
  };
  return (
    <div className="login">
      <div className="wrapper">
        <h2>Login</h2>
        <form>
          <input placeholder="用户名" />
          <input placeholder="密码" />
          <button onClick={handleSubmit} disabled={loading}>
            登录
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
