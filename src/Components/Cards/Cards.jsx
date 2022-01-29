import React from "react";
import UserService from "../../Service/UserService";
import { connect } from "react-redux";
import Book from "../Book/Book";
import "./Cards.css";
import { fetchBooks } from "../../Redux/BookActions";
const userService = new UserService();



 function Cards(props) {
  const [books, setBooks] = React.useState([]);
  const[select,setSelect] =React.useState(false);
  const[currentBook , setCurrentBook] = React.useState({});

  
  const getAllBooks = () => {
    props.dispatch(fetchBooks())
    userService.getBooks("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book")
      .then((res) => {
        setBooks(res.data.result)
        console.log("getbook", res.data.result);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

 React.useEffect(() => {
    getAllBooks();
  }, []);


const changebookview =(book)=>{
  setCurrentBook({...currentBook,book})
  setSelect(!select) 
  
}

  return (
    <div>
      <div className="Card-Container" >
     {select ? <Book book={currentBook}/>  : 
      books.map((book,index) => (
        <div key={index} className="Books-Container" value={select}  >
          <div className="img-Container"onClick={()=>changebookview(book)}>
            <div className="img-Card"></div>
          </div>
          <div className="TextContent">
            <div className="Text">
              <h3>{book.bookName}</h3>
            </div>
            <div style={{ color: "black"}}>by {book.author}</div>
            <div>
              <span
                style={{
                  backgroundColor: "green",
                  color: "white",
                }}
              >
                4.5*
              </span>
              <span style={{ color: "black" }}>(20)</span>
            </div>
            <div>
              <span style={{ width: "50px" }}>
                <b>Rs {book.price}</b>
              </span>
              <del style={{ color: "black" }}> Rs 1500</del>
            </div>
            </div>
        </div>
      ))} 
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
	return {
		books: state.bookReducer.books,
	};
};



export default connect(mapStateToProps)(Cards)