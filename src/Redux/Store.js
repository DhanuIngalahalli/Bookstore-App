import { createStore, applyMiddleware, combineReducers } from 'redux';
import { bookReducer } from './BookReducer';
import thunk from 'redux-thunk';
import { cartItemReducer } from './CartReducer';

const reducer = combineReducers({
	bookReducer: bookReducer,
	cartItemReducer: cartItemReducer,
});

const store = createStore(reducer,applyMiddleware(thunk));
export default store;