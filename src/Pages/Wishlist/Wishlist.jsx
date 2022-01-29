import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Header from '../../Components/Header/Header';
import "./Wishlist.css";
import UserService from '../../Service/UserService';
const userService = new UserService();





function Wishlist() {
    const [myWishlist, setMyWishlist] = React.useState([]);
	const [showState, setShowState] = React.useState(false);
   

    const handleClick = () => {
		
	};


	const displayWishlistItem  = () => {
		userService.getWishlistItems("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items")
			.then((res) => {
				setMyWishlist(res.data.result);
			})
			.catch((err) => console.warn(err));
	};


	React.useEffect(() => {
		displayWishlistItem();
	}, [showState]);

	
	const handleDelete  = (bookId) => {
		userService.deleteWishlistItems(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_wishlist_item/${bookId}`)
			.then(() => {
				setShowState(!showState);
			})
			.catch((err) => {
				console.log(err);
			});
	};
    return (
        <div>
           <Header />
			<div className='wishlist-main-container'>
				<div className='container'>
					<div className='wishlist-title'>
						<span
							style={{
								color: 'black',
								marginRight: '2px',
								cursor: 'pointer',
							}}
						    onClick={handleClick}
						>
							Home /
						</span>
						<span>My WishList</span>
					</div>
					<div className='wish-list-heading'>
						My WishList ( {myWishlist.length} )
					</div>
					<div className='wish-list-display-book'>
                       {myWishlist.map((book) => (
							<div  key={book._id}  className='wishlist-Book-Container'>
								<div className='Img-Info-Container'>
									<div className='BookImg-Container'>
										<div className='wishlistBookImg'></div>
									</div>
									<div className='BookInfo-Container'>
										<div className='BookName'>
                                        {book.product_id.bookName}
										</div>
										<div className='BookAuthor'>
											by {book.product_id.author}
										</div>
										<div className='Book-Price-Container'>
											<div className='BookNewPrice'>
												Rs. {book.product_id.discountPrice}
											</div>
											<div className='BookOldPrice'>
												Rs. {book.product_id.price}
											</div>
										</div>
									</div>
								</div>
								<div className='Buttons-Container'>
									<div
										className='remove-Btn'
									    onClick={() => handleDelete (book.product_id._id)}
									>
										<DeleteOutlineOutlinedIcon
											style={{ width: '100%', height: '100%' }}
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<br />
        </div>
    );
}


export default Wishlist
