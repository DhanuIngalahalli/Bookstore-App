const initialBookState = {
	loading: false,
	books: [],
	error: '',
};

export const bookReducer = (state = initialBookState, action) => {
	switch (action.type) {
		case 'FETCH_BOOKS_REQUEST':
			return {
				...state,
				loading: true,
			};

		case 'FETCH_BOOKS_SUCCESS':
			return {
				loading: false,
				books: action.payload,
				error: '',
			};

		case 'FETCH_BOOKS_ERROR':
			return {
				loading: false,
				books: [],
				error: 'server error',
			};

		default: 
			return state;
	}
};
