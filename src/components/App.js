import React from 'react';
import AppLayout from './Layout';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' component={AppLayout} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
