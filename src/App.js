import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import './App.css';
import Programming from './Programming';
import Gaming from './Gaming';
import ProgrammingTopics from './ProgrammingTopics';
import GamingTopics from './GamingTopics';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/gaming" component={GamingTopics}/>
					<Route path="/Programming" component={ProgrammingTopics} />
				</Switch>
			</div>
		</Router>
	);
}

const Home = () => (
	<div>
		<h1>Home Page</h1>
		
		<Gaming />
		<Programming />
		
	</div>
)
export default App;
