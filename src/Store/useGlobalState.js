import { useReducer } from 'react';
import layoutReducer from '../components/Layout/reducer';
import demoReducer from '../components/Demo/reducer';

const initial_state = {
	layoutReducer: {
		isLoading: false
	},
	demoReducer: {
		items: [],
		errorMessage: ''
	}
};

const rootReducer = {
	layoutReducer,
	demoReducer
};

const combineReducers = (reducers) => {
	return (state = {}, action) => {
		const newState = {};
		for (let key in reducers) {
			newState[key] = reducers[key](state[key], action);
		}

		return newState;
	};
};

export const useGlobalState = () => {
	const [ state, dispatch ] = useReducer(combineReducers(rootReducer), initial_state);

	return { state, dispatch };
};
