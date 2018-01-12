import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import './App.css'

//IMPORT ALL COMPONENTS
import NewMessage from '../NewMessage/NewMessage'
import Message from '../Message/Message'
import Dashboard from '../Dashboard/Dashboard'
import Inbox from '../Inbox/Inbox'
import Test from '../Test/Test'
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
							path="/new-message"
							render={props => <NewMessage {...props} />}
						/>
						<Route exact path="/inbox" render={props => <Inbox {...props} />} />
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
