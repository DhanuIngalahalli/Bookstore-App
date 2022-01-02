import React from 'react'
import './Login.css';

function Login() {
    return (
        <div>
            <div className="Login-form">
            <input className="email" type="text" placeholder="Email-id" name="email"/>
            <input className="pwd" type="text" placeholder="Password" name="password"/>
            <button className="login" >Login</button>
            <div className="OR-button">OR</div>
            <div className="text">
            <div className="txt1">Facebook</div>
            <div className="txt2">Google</div>
      </div>
          </div>
        </div>
    );
}

export default Login
