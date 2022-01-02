import React from 'react'
import './Registration.css';

function Registration() {
    return (
  <div className="signup-form">
          <input className="firstname"  type="text" placeholder="Full Name" name="fullName" />
          <input className="email-id"   type="text" placeholder="Email"     name="email"/>
          <input className="pwd"        type="text" placeholder="Password"  name="password"/>
          <input className="phone-num" type="text"  placeholder="Mobile Number"  name="phone" />
          <button className="button" >Signup</button>
        </div>
    )
}

export default Registration
