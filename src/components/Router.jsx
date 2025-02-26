import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Form from '../Form';
import Confirm from '../Confirm';
import Completed from '../Completed';
import Count from '../Count';

export const Router = () => {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/form" element={<Form />} />
			<Route path="/form/confirm" element={<Confirm />} />
			<Route path="/form/completed" element={<Completed />} />
			<Route path="/count" element={<Count />} />
		</Routes>
	);
};
