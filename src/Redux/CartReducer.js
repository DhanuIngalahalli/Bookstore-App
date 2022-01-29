const initialCartItemState = {
	cartItems: 0,
};


export const cartItemReducer = (state = initialCartItemState, action) => {
	switch (action.type) {
		case 'SET_ITEM':
			return {
				...state,
				cartItems: action.payload,
			};

		case 'INCREMENT_ITEM':
			return {
				...state,
				cartItems: state.cartItems + 1,
			};

		case 'DECREMENT_ITEM':
			return {
				...state,
				cartItems: state.cartItems - 1,
			};

		default:
			return state;
	}
};
