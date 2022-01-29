import React from 'react'
import './Login.css';
import UserService from '../../Service/UserService';
import { TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
const userService = new UserService();


const emailRegex =
  /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{5,}$/;

function Login() {

   const [emailHelper, setEmailHelper] = React.useState(" ");
   const [passwordHelper, setPasswordHelper] = React.useState(" ");
   const [emailError, setEmailError] = React.useState(false);
   const [passwordError, setPasswordError] = React.useState(false);
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
        if (emailRegex.test(loginInfo.email)) {
          setEmailError(false);
          setEmailHelper(" ");
        } else {
          setEmailError(true);
          setEmailHelper("Enter an email or phone number");
        }
        if (passwordRegex.test(loginInfo.password)) {
          setPasswordError(false);
          setPasswordHelper(" ");
        } else {
          setPasswordError(true);
          setPasswordHelper("Enter a password");
        }
        if (emailRegex.test(loginInfo.email) && passwordRegex.test(loginInfo.password)) {
          console.log(emailRegex.test(loginInfo.email) && passwordRegex.test(loginInfo.password));
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
    }
   
    return (
      <div>
      <div className="Login-form">
      <TextField
         className="email"
         type="text" 
         placeholder="Email-id" 
         name="email"  
         value={loginInfo.email}
         onChange={(e) =>changeHandle(e)}
         error={emailError}
         helperText={emailHelper}
         />
     <TextField 
     className="pwd" 
     type="text" 
     placeholder="Password" 
     name="password"  
     value={loginInfo.password}
     onChange={(e) => changeHandle(e)}
     error={passwordError}
     helperText={passwordHelper}
     />
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
