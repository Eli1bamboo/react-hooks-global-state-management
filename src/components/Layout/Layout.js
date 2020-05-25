/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { StoreContext } from '../../Store';
import { Tabs, List } from '../Demo';

export const Layout = () => {
	const { state } = useContext(StoreContext);

	const { layoutReducer: { isLoading } } = state;

	return (
		<div>
			<div>
				<Tabs isLoading={isLoading} />
				<List isLoading={isLoading} />
			</div>
		</div>
	);
};
