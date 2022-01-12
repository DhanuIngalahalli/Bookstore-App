import React from 'react'
import './Registration.css';
import UserService from '../../Service/UserService';
import { toast } from 'react-toastify';
const userService = new UserService();

toast.configure();

const validName = /^([A-Z]{1,}[a-z]{2,}[ ]?){1,4}$/;

const validEmail =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validPassword =
	/^(?=.*[A-Z])(?=.*[a-z])(?=[^!@#$%^&+=]*[!@#$%^&+=][^!@#$%^&+=]*$)(?=.*[0-9]).{8,}$/;

const validMobileNumber = /^[789]\d{9}$/;

function Registration() {
  const [userInfo, setUserInfo] = React.useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

    const changeHandle = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup =() => {
    userService.Registration("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration",userInfo)
    .then((res) => {
      console.log("sucessfully registered",res.data);
    
    })
    .catch((err) => {
      console.warn(err);
    });
  }
    return (
  <div className="signup-form">
          <input className="firstname"  type="text" placeholder="Full Name" name="fullName"  value={userInfo.fullName} 
          onChange={(e) =>changeHandle(e)} />
          <input className="email-id"   type="text" placeholder="Email"     name="email" value={userInfo.email} 
          onChange={(e) =>changeHandle(e)}/>
          <input className="password"        type="text" placeholder="Password"  name="password"  value={userInfo.password} 
          onChange={(e) =>changeHandle(e)}/>
          <input className="phone-num" type="text"  placeholder="Mobile Number"  name="phone" value={userInfo.phone}
          onChange={(e) =>changeHandle(e)}/>
          <button className="button"onClick={handleSignup} >Signup</button>
        </div>
    )
}

export default Registration
