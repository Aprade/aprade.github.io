import './assets/fonts/manrope/index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Construction, NotFound } from './pages';
import { Footer } from './components';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={ Construction }></Route>
				<Route component={ NotFound } />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
