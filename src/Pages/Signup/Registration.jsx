import React from 'react'
import './Registration.css';
import UserService from '../../Service/UserService';
const userService = new UserService();


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
