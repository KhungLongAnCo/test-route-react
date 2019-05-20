import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/menu';
import routes from './routers';


class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Menu />
					<div className="container">
						<Switch>
							{this.showRoutes(routes)}
						</Switch>
					</div>
				</div>
			</Router>
		)
	}
	showRoutes = (routes) => {
		let result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.main}
					/>
				)
			})
		}
		return result;
	}
}

export default App;