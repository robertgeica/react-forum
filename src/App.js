import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import './App.css';
import ProgrammingCategory from './Categories/ProgrammingCategory';
import GamingCategory from './Categories/GamingCategory';
import ProgrammingTopics from './Topics/ProgrammingTopics';
import GamingTopics from './Topics/GamingTopics';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/gaming"  component={GamingTopics}/>
					<Route path="/programming" component={ProgrammingTopics} />
					
				</Switch>
			</div>
		</Router>
	);
}

const Home = () => (
	<div>
		<h1>Home Page</h1>
		
		<GamingCategory />
		<ProgrammingCategory />
		
	</div>
)
export default App;
