import React from 'react'
import Signup from '../Signup/Registration';
import "./Page.css";

import Login from '../Login/Login';

function Page() {
const[update,setUpdate]=React.useState(true)

const handleOnClick = () => {
  setUpdate(!update);
  
};
    return (
      <div>
         <div className="main-Container">
          <div className="first-Container">
             <div className="Image-Container">
              <img className="image" src={Image} width="245px"  height="245px" />
               <div className="text">
                   ONLINE BOOK SHOPPING
              </div>
        </div>
        <div className="second-container">
          <div className="third-container">
          <div className="Textform"> 
           <span
                className="login-text"
                onClick={() => handleOnClick()}
              >
                LOGIN
              </span>
              <span
                className="signup-text" 
                onClick={() => handleOnClick()}
              >
                SIGNUP
              </span>
            </div>
            <div className="LoginSignup-container">
              {update ?<Login /> : <Signup />}
            </div>
          </div>
        </div>
      </div>
        </div>
        </div>
    );
}

export default Page
