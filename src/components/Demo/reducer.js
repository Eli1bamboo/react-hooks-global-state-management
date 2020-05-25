const demoReducer = (state, action) => {
	switch (action.type) {
		case 'GET_DEMO_ITEMS_SUCCESS':
			return {
				...state,
				loading: false,
				items: action.payload
			};
		case 'GET_DEMO_ITEMS_FAILED':
			return {
				...state,
				loading: false,
				errorMessage: action.errorMessage
			};
		default:
			return state;
	}
};

export default demoReducer;
