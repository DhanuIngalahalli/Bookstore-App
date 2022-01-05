import React from 'react'
import Bookstorelogo from '../../Assets/Bookstorelogo.png'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./Header.css"

function Header() {


    return (
        <div className="Header-main-Container">
        <div className="logo-container">
          <div className="logo">
            <img src={Bookstorelogo} />
          </div>
          <div className="logo-text">
                Bookstore
          </div>
        </div>
        <div className="header-search-field">
         <div ClassName="search-icon"><SearchOutlinedIcon/></div> 
          <input
                className="input"
                type="text" 
                placeholder="Search"
              
            />
        </div>
        <div className="Icons">
          <div className=" profile-icon">
            <PermIdentityOutlinedIcon />
            Profile
          </div>
          <div className="cart-icon" >
            <ShoppingCartOutlinedIcon />
            Cart
          </div>
        </div>
      </div>
    )
}

export default Header