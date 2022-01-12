import React from "react";
import "./Page.css";
import Login from "../Login/Login";
import Signup from "../Signup/Registration";
import Image from "../../Assets/Image.png";


function Page() {
const[update,setUpdate]=React.useState(true)

const handleOnClick = () => {
  setUpdate(!update);
  
};
  
  return (
    <div className="main-Container">
      <div className="Container1">
        <div className="Image-Container">
            <img className="Image"
              src={Image}
              width="245px"
              height="245px"
            />
          <div className="imgText">ONLINE BOOK SHOPPING</div>
        </div>
        <div className="formcontainer1">
          <div className="formcontainer2">
          <div className="Textbox">  <span
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
              {update ? <Login /> : <Signup />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;