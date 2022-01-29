import React from 'react'
import Header from '../Header/Header'
import { Button } from "@mui/material";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarIcon from '@mui/icons-material/Star';
import Typography from "@mui/material/Typography";
import './Book.css';
import UserService from "../../Service/UserService";
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { setCartItem } from '../../Redux/BookActions';
const userService = new UserService();

function Book(props) {
   const[addBook,setAddBook] = React.useState(false)
   const [quantity, setQuantity] = React.useState(0);
   const [cartItemId, setCartItemId] = React.useState("");
   const [getWishlistId, setGetWishlistId] =React.useState([]);

 console.log(props.book.book);

  const handleState = () => {
    props.openBook(false)
}



const bookId = (id) =>{
  console.log(id);
  userService.addToCart(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${id}`)
  .then((response) => {
    displayCartItems()
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
}
const displayCartItems = () => {
  props.dispatch(setCartItem());
  userService.getCartItems("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items")
  .then((res) => {
    console.log(res);
    let filterArray = res.data.result.filter(function (cart) {
      if (props.book.book._id === cart.product_id._id) {
        setQuantity(cart.quantityToBuy);
        setCartItemId(cart._id);
        console.log(cart.product_id._id);
        return cart;
      }
    });
    console.log(filterArray);
    setAddBook(filterArray);

  })
  .catch((error) => {
    console.log(error);
  });
};

const incrementCounter = (cartItemId) => {
  
  let data = {
    "quantityToBuy": quantity + 1,
  };
  userService.CartItemQuantity(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${cartItemId}`, data)
    .then((response) => {
      console.log(response);
     displayCartItems();
    })
    .catch((error) => {
      console.error(error);
    });
};

const decrementCounter= (cartItemId) => {
  
  let data = {
    quantityToBuy: quantity - 1,
  };
  userService.CartItemQuantity(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${cartItemId}`,data)
    .then((response) => {
      console.log(response);
      displayCartItems();

    })
    .catch((error) => {
      console.error(error);
    });
};
const addToWishlist = (id) => {
  userService.AddToWishList(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id}`)
     .then((response) => {
       console.log(response);
       displayWishlistItems();
     })
     .catch((error) => {
       console.log(error);
     });
 };
 const displayWishlistItems = () => {
   userService.getWishlistItems("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items")
     .then((response) => {
       console.log(response);
       let WishlistArray = response.data.result.filter(function (
         wishlist
       ) {
         if (props.book.book._id === wishlist.product_id._id) {
           console.log(wishlist.product_id._id);
           return wishlist;
         }
       });
       setGetWishlistId(WishlistArray);
     })
     .catch((error) => {
       console.log(error);
     });
 };
   


React.useEffect(() => {
  displayCartItems();
  displayWishlistItems();
}, [quantity]);



 return (
    <div>
      <h4 style={{ paddingLeft:"50px" }} >
        <span 
        style={{ 
          color: "gray" ,
          cursor: "pointer",
           }}
            onClick={handleState}> 
                   Home/ 
            </span> 
            (Book 01)
      </h4>
      <div className="Book-Container">
        <div className="Book-icons">
          <div className="img1"></div>
          <div className="img2"></div>
        </div>
        <div className="Bookcard-Container">
          <div className="book-buttons">
            <div className="Card-Img">
              <div className="book-img"></div>
            </div>
            <div className="bookAddbuttons">
            {addBook.length === 0 ? (
                <Button
                 style={{
                    backgroundColor: "#A03037",
                    width: "100px",
                    height: "40px",
                  }}
                  onClick={()=>bookId(props.book.book._id)}
                  variant="contained"
                >
                  ADD TO BAG
                </Button>
                ) : (
                  <div direction="row" spacing={1}>
                  <button
                    className="AddtobagMinusBtn"
                    onClick={()=>decrementCounter(cartItemId)}
                    id={props.book.book._id}
                    
                    style={{
                      background: "#FAFAFA 0% 0% no-repeat padding-box",
                      border: "2px solid #DBDBDB",
                      width: "28px",
                      height: "25px",
                      opacity: "1",
                      marginTop: "5px",
                    }}
                  >
                    -
                  </button>
                  <button
                    sx={{
                      color: "black",
                      fontSize: "15px",
                      width: 40,
                      height: 30,
                      background: "#FAFAFA 0% 0% no-repeat padding-box",
                      border: "1px solid #DBDBDB",
                    }}
                    variant="square"
                  >
                    {quantity}
                  </button>
                  <button
                    id={props.book.book._id}
                    className="AddtobagplusBtn"
                    onClick={()=>incrementCounter(cartItemId)}
                    id="plus"
                    style={{
                      width: "28px",
                      height: "25px",
                      background: "#FAFAFA 0% 0% no-repeat padding-box",
                      border: "1px solid #DBDBDB",
                      opacity: "1",
                      marginTop: "2px",
                    }}
                  >
                    +
                  </button>
                </div>)}
                <div>
                {getWishlistId.length !== 0 ? (
                <Button
                  fullWidth
                  style={{
                    color: "black",
                    borderColor: "#878787",
                    marginBottom: "30px",
                    width: "150px",
                    height: "40px",
                  }}
                  variant="outlined"
                >
                  Added To Wishlist
                </Button>
              ) : (
               <Button fullwidth style={{
                    backgroundColor: "black",
                    width: "100px",
                    height: "40px",
                  }}
                  variant="contained"
                  onClick={()=>addToWishlist(props.book.book._id)}
                  >
                  WISHLIST
                </Button>
                )}
              </div>
            </div>
          </div>
        
          <div className="bookdetailsContainer">
            <div className="bookNameText">
              <h2 >{props.book.book.bookName}book</h2>
            </div>
            <div style={{ color: "gray" ,paddingRight:"470px"}}>{props.book.book.author}</div>
            <div>
              <span
                style={{
                  backgroundColor: "green",
                  width: "60px",
                  color: "white",
                  marginRight:"450px"
                }}
              >
                4.3*
              </span>
              <span style={{ color: "gray", marginRight:"450px" }}>(30)</span>
            </div>
            <div>
              <span style={{ width: "50px" }}>
                <b>{props.book.book.price}</b>
              </span>
              <del style={{ color: "gray",  marginRight:"450px" }}> Rs 1700</del>
            </div>

            <div className="bookDetails" style={{ color: "gray" }}>
              <hr />
              <h4>Book Detail</h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              mollitia ipsam delectus perferendis provident. Error repudiandae
              omnis delectus inventore, cupiditate ullam nulla illum harum
              quibusdam ut recusandae eos voluptatem.
              <hr />
            </div>

            <div className="customerFeedback">
              <h3>Customer Feedback</h3>
              <div className="ratingContainer">
                <div className="rating" style={{ paddingRight:"400px" }}>
                  <Typography component="legend">Overall Rating</Typography>
                  <div className='ratingStarContainer'>
						<StarBorderOutlinedIcon style={{ color: '#707070' }} />
						<StarBorderOutlinedIcon style={{ color: '#707070' }} />
						<StarBorderOutlinedIcon style={{ color: '#707070' }} />
						<StarBorderOutlinedIcon style={{ color: '#707070' }} />
						<StarBorderOutlinedIcon style={{ color: '#707070' }} />
				</div>
                  <input type="text" className="inputFeedback" />
                </div>
                <Button   style={{ marginLeft:"450px" }}
                  variant="contained"
               
                >
                  Submit
                </Button>
              </div>
              <div className="customerRatingContain">
                <div className="customerRating">
                  <p>
                    Good book
                  </p>
                    <StarIcon style={{ color: '#FFCE00' }} />
				          	<StarIcon style={{ color: '#FFCE00' }} />
				          	<StarIcon style={{ color: '#FFCE00' }} />
                    <StarBorderOutlinedIcon style={{ color: '#707070' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
    )
}

export default connect()(Book)
