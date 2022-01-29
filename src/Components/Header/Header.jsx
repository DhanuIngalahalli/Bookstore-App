import React from 'react'
import Bookstorelogo from '../../Assets/Bookstorelogo.png'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShopOutlinedIcon from '@mui/icons-material/ShopOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Popper from '@mui/material/Popper';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import "./Header.css"
import { setCartItem } from '../../Redux/BookActions';

function Header(props) {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const history = useHistory();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};


  const navigateToWishList = () => {
		history.push('/Home/Book/MyCart/Orderplaced/Wishlist');
	};

  const openCartItem = () => {
    props.dispatch(setCartItem());
    history.push('/Home/Book/MyCart')
  };



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
          <div className=" profile-icon" onClick={handleClick}>
            <PermIdentityOutlinedIcon />
            Profile
							</div>
          </div>
          <Popper
							open={open}
							anchorEl={anchorEl}
							placement='bottom-end'
						>
							<ClickAwayListener onClickAway={() => setAnchorEl(null)}>
								<div className='popper-container'>
									<div className='popper-heading'></div>
									<div className='popper-content'>
										<PersonOutlineOutlinedIcon  /> Profile
									</div>
									<div className='popper-content'>
										<ShopOutlinedIcon  /> My Order
									</div>
									<div className='popper-content'onClick={navigateToWishList} >
										<FavoriteBorderOutlinedIcon  /> My Wishlist
									</div>
									<div className='popper-btn-container'>
										<div
											className='popper-btn-inner-container'
											
										>
											<span className='popper-btn'>Logout</span>
										</div>
									</div>
								</div>
							</ClickAwayListener>
						</Popper>
                <div className="Cart-Icon" onClick={openCartItem}>
            <ShoppingCartOutlinedIcon />
            Cart
          </div>
        </div>
      
    )
}
const mapStateToProps = (state) => {
	return {
		cartItems: state.cartItemReducer.cartItems,
	};
};


export default  connect(mapStateToProps)(Header)