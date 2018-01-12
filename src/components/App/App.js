import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import './App.css'

import NewBoast from '../NewBoast/NewBoast'
import Dashboard from '../Dashboard/Dashboard'
import BoastList from '../BoastList/BoastList'
class App extends Component {
	render() {
		return (
			<div>
				<Dashboard />
				<main>
					<Switch>
						<Route
							exact
							path="/new-boast"
							render={props => <NewBoast {...props} />}
						/>
						<Route
							exact
							path="/boastlist"
							render={props => <BoastList {...props} />}
						/>
						<Route exact path="/*" render={props => <BoastList {...props} />} />
					</Switch>
				</main>
			</div>
		)
	}
}

export default App
