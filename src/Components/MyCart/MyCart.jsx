import React from 'react'
import bookimg from "../../Assets/bookimg.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Header from "../Header/Header";
import "./MyCart.css";
import UserService from "../../Service/UserService";
import Book from '../Book/Book';
import CustomerDetails from '../../Pages/CustomerDetails/CustomerDetails';
import Orderplaced from '../../Pages/Orderplaced/Orderplaced';



const userService = new UserService();

function MyCart() {
	  const [cartItems, setCartItems] = React.useState([]);
    const [showAddress, setShowAddress] = React.useState(false);
  	const [showOrder, setShowOrder] = React.useState(false);
    const [showButton, setShowButton] = React.useState(true);
    

	  React.useEffect(() => {
		getAllCartItems();
	  }, []);
	
	  const getAllCartItems = () => {
		userService
		  .getCartItems(
			"https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items"
		  )
		  .then((response) => {
			console.log("getCartItems", response.data.result);
			setCartItems(response.data.result);
		  })
		  .catch((err) => {
			console.warn(err);
		  });
	  };

	  // Decrease books added to cart
  const decrementQuantityToCart = (cartId) => {
    console.log("decrimented items", cartId);
    cartItems.map((item) => {
     if (item._id === cartId) {
      updateCartItemQuantity(cartId, item.quantityToBuy - 1);
       
     } else {
       return item;
     }
   });
   

 };
  

  // Method to update book order quantity
  const updateCartItemQuantity = (cartItemId, quantity1) => {
    let obj = { quantityToBuy: quantity1 };
    userService
      .CartItemQuantity(
        `https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${cartItemId}`, obj)
      .then((response) => {
        console.log("quantity", response.data.message);
        getAllCartItems();
      })
      .catch((err) => {
        console.warn(err);
      });
  };

   // Increase books added to cart
  const incrementQuantityToCart = (cartId) => {
    cartItems.map((cartitem) => {
      if (cartitem._id === cartId) {
        updateCartItemQuantity(cartId, cartitem.quantityToBuy + 1);
      } else {
        return cartitem;
      }
    });
  };
  console.log("cartItems", cartItems);

  const deleteCartItems = (cartItemId) => {
    userService
      .RemoveItemFromCart(
        `https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${cartItemId}`
      )
      .then((response) => {
        console.log(response.data.message);
        getAllCartItems();
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const displayCustomerDetails = () => {
    setShowAddress(!showAddress);
    setShowButton(!showButton);

  };

  const continueOrder = () => {
    setShowOrder(!showOrder);
  };

  const checkoutOrder = () => {
    let array_ordered_books = [];

    cartItems.map((e) => {
      let orders = {
        "product_id": e.id,
        "product_name": e.product_id.bookName,
        "product_quantity": e.quantityToBuy,
        "product_price": e.product_id.price,
      };
       return array_ordered_books.push(orders);
    });
  

  let orderObj = {
     orders:array_ordered_books,
  };
  userService
       .takeOrder(
         "https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order",orderObj
       )
       .then((response) => {
          console.log(response.data.message,"order items",response.data.result);
       })
       .catch((err) => {
         console.warn(err);
       });
      };


	return (
		<div>
			<Header />
      <h3 style={{ marginRight:"950px" }}>
        <span style={{ color: "gray" }}> Home/ </span> My cart
      </h3>

      <div className="my-Cart-Container">
        <div className="Location-content">
          <h3>My cart(1)</h3>
          <select className="Location-text">
            <option value="location">Bridgelabz solutions</option>
          </select>
        </div>
        {cartItems.map((product, index) => (
          <div className="bookImg-Details" key={index}>
            <div className="bookImgDiv"></div>
            <div className="bookDetailsDiv-text">
              <b>{product.product_id.bookName}</b>
              <p>by {product.product_id.author}</p>
             <div> <span style={{ width: "90px" }}>
                <b>Rs {product.product_id.price}</b>
              </span>
              <del style={{ color: "gray" }}> Rs 2000</del></div>
              <div className="Remove-Cart-Items">
                <button
                  className="substraction"
                  onClick={() => decrementQuantityToCart(product._id)}
                >
                  -
                </button>
                <button className="value" id={product._id}>
                  {product.quantityToBuy}
                </button>
                <button
                  className="addition"
                  onClick={() => incrementQuantityToCart(product._id)}
                >
                  +
                </button>
                <button
                  className="remove"
                  onClick={() => deleteCartItems(product._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
        {cartItems.length>=1 ?(
        <div className="place-Order-Button">
          <Button
            variant="contained"
            color="primary"
            style={{ float: "right" }}
            onClick={displayCustomerDetails}
          >
            Place order
          </Button>
        </div>
        ) : null}
      </div>
      <div className="address-Container">
      {!showAddress ? (
        <div className="txt">Address Details</div>
        ) : (
          <CustomerDetails continueOrder={continueOrder}/>
        )}
      </div>
      <div className="Order-Container">
      {!showOrder ? (
        <h4 className="txt">Order Summery</h4>
        ) : (
        <div className="order-Summery-Container">
          <p className="order-txt">Order Summery</p>
          {cartItems.map((product, index) => (
            <div className="bookImg-Details" key={index}>
              <div className="bookImgDiv"></div>
              <div className="bookDetailsDiv-text">
                <b>{product.product_id.bookName}</b>
                <p>by {product.product_id.author}</p>
                <span style={{ width: "50px" }}>
                  <b>Rs {product.product_id.price}</b>
                </span>
                <del style={{ color: "gray" }}> Rs 2000</del>
              </div>
            </div>
          ))}
          <div className="checkout-button">
            <Button 
			        variant="contained" 
				      color="primary"
              onClick={checkoutOrder}>
              Checkout
            </Button>
          </div>
        </div>
        )}
      </div>
		</div>
	);
  
}

export default MyCart
