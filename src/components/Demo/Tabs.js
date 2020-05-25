/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { StoreContext } from '../../Store';

export const Tabs = (props) => {
	const { dispatch } = useContext(StoreContext);

	const fetchDataWithCriteria = async (criteria) => {
		dispatch({ type: 'IS_LOADING' });

		const res = await fetch(`https://swapi.dev/api/${criteria}/`);

		res
			.json()
			.then((res) => {
				dispatch({ type: 'GET_DEMO_ITEMS_SUCCESS', payload: res.results });
			})
			.catch((err) => dispatch({ type: 'GET_DEMO_ITEMS_FAILED', errorMessage: err }));

		dispatch({ type: 'IS_LOADING_DONE' });
	};

	const handleSerach = (e) => {
		e.preventDefault();

		const criteria = e.target.value;

		fetchDataWithCriteria(criteria);
	};

	const { isLoading } = props;

	return (
		<div>
			<button onClick={(e) => handleSerach(e)} value="films" disabled={isLoading}>
				Films
			</button>
			<button onClick={(e) => handleSerach(e)} value="people" disabled={isLoading}>
				People
			</button>
			<button onClick={(e) => handleSerach(e)} value="planets" disabled={isLoading}>
				Planets
			</button>
			<button onClick={(e) => handleSerach(e)} value="species" disabled={isLoading}>
				Species
			</button>
			<button onClick={(e) => handleSerach(e)} value="starships" disabled={isLoading}>
				Starships
			</button>
			<button onClick={(e) => handleSerach(e)} value="vehicles" disabled={isLoading}>
				Vehicles
			</button>
		</div>
	);
};
