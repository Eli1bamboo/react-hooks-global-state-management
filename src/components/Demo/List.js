/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../Store';

export const List = (props) => {
	const { state, dispatch } = useContext(StoreContext);

	const fetchData = async () => {
		dispatch({ type: 'IS_LOADING' });

		const res = await fetch('https://swapi.dev/api/films/');

		res
			.json()
			.then((res) => {
				dispatch({ type: 'GET_DEMO_ITEMS_SUCCESS', payload: res.results });
			})
			.catch((err) => dispatch({ type: 'GET_DEMO_ITEMS_FAILED', errorMessage: err.message }));

		dispatch({ type: 'IS_LOADING_DONE' });
	};

	useEffect(() => {
		fetchData();
	}, []);

	const { isLoading } = props;
	const { demoReducer: { items, errorMessage } } = state;

	return (
		<div>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<div>
					<ul>
						{items.map((item) => (
							<li key={item.name ? item.name : item.title}>{item.name ? item.name : item.title}</li>
						))}
					</ul>
					<p>{errorMessage}</p>
				</div>
			)}
		</div>
	);
};
