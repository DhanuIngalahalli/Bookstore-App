import React from 'react'
import './Login.css';
import UserService from '../../Service/UserService';
import { useHistory } from "react-router-dom";
const userService = new UserService();

function Login() {
    const [loginInfo, setLoginInfo] = React.useState({
        email: "",
        password: "",
      });
     
      const history = useHistory();
      const changeHandle = (e) => {
        setLoginInfo({
          ...loginInfo,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleLogin =()=>{
        userService.Login("https://bookstore.incubation.bridgelabz.com/bookstore_user/login",loginInfo)
        .then((res) => {
          localStorage.setItem("token", res.data.result.accessToken);
          console.log("login response", res.data);
          history.push("/Home");
        
        })
        .catch((err) => {
          console.warn(err);
        });
      }
    return (
        <div>
            <div className="Login-form">
            <input className="email" type="text"  placeholder="Email-id" name="email"  value={loginInfo.email}
        onChange={(e) =>changeHandle(e)}/>
            <input className="pwd" type="text" placeholder="Password" name="password"   value={loginInfo.password}
        onChange={(e) => changeHandle(e)}/>
            <button className="login" onClick={handleLogin} >Login</button>
            <div className="OR-button">OR</div>
            <div className="btn-text">
            <div className="txt1">Facebook</div>
            <div className="txt2">Google</div>
      </div>
          </div>
        </div>
    )
}

export default Login
