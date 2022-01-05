import React from 'react'
import Header from '../Header/Header'
import { Button } from "@mui/material";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarIcon from '@mui/icons-material/Star';
import Typography from "@mui/material/Typography";
import './Book.css';
import UserService from "../../Service/UserService";
const userService = new UserService();

function Book(props) {
   const[addBook,setAddBook] = React.useState(false)

 console.log(props.book.book);

  const handleHomePage = () => {
    props.openBook(false)
}
  


const bookId = (_id) =>{

  userService.addToCart(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${_id}`)
  .then((response) => {
    console.log(response);
    
    
  })
  .catch((error) => {
    console.error(error);
  });


}

 return (
    <div>
      <h4 style={{ paddingRight:"500px" }} >
        <span style={{ color: "gray"  }} onClick={handleHomePage}> Home/ </span> (Book 01)
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
                <Button
                 style={{
                    backgroundColor: "#A03037",
                    width: "100px",
                    height: "40px",
                  }}
                  onClick={bookId}
                  variant="contained"
                >
                  ADD TO BAG
                </Button>
              <div>
                <Button style={{
                    backgroundColor: "black",
                    width: "100px",
                    height: "40px",
                  }}
                  variant="contained">
                  WISHLIST
                </Button>
              </div>
            </div>
          </div>
        
          <div className="bookdetailsContainer">
            <div className="bookNameText">
              <h2 >{props.book.book.bookName}book</h2>
            </div>
            <div style={{ color: "gray" ,paddingRight:"450px" }}>{props.book.book.author}</div>
            <div>
              <span
                style={{
                  backgroundColor: "green",
                  width: "60px",
                  color: "white",
                }}
              >
                4.5*
              </span>
              <span style={{ color: "gray" }}>(30)</span>
            </div>
            <div>
              <span style={{ width: "50px" }}>
                <b>{props.book.book.price}</b>
              </span>
              <del style={{ color: "gray" }}> Rs 1700</del>
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
					<StarIcon style={{ color: '#FFCE00' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Book
