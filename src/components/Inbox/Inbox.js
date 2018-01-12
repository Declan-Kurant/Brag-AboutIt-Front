import React, { Link, Component } from 'react'
import Message from '../Message/Message.js'
import { getMessages } from '../../services/message.js'
import './Inbox.css'

import axios from 'axios'

let servicePath = 'http://localhost:3001'

class Inbox extends Component {
	constructor(props) {
		super(props)

		this.state = {
			// messages: []
		}
		// this.getMessages = this.getMessages().bind(this)
	}

	getMessages() {
		console.log('getting messages')
		axios
			.get(`http://localhost:3001/messages`)
			.then(res => {
				this.setState({
					messages: res.data
				})
			})
			.catch(err => console.log(err))
	}
	componentDidMount() {
		this.getMessages()
		console.log(this.state.messages)
	}
	render() {
		// let messages = this.state.messages.map((message, index) => {
		// 	return (
		// 		<div key={index} classname="individual-message">
		// 			<Link to={`/messages/${message.id}`}>
		// 				<Message />
		// 			</Link>
		// 		</div>
		// 	)
		// })
		return (
			<div className="message-list">
				<div className="individual-message">
					<p> From : ____ </p>
					<p> About : ____ </p>
					<p> Message: ____ </p>
				</div>
				<div className="individual-message">
					<p> From : ____ </p>
					<p> About : ____ </p>
					<p> Message: ____ </p>
				</div>
				<div className="individual-message">
					<p> From : ____ </p>
					<p> About : ____ </p>
					<p> Message: ____ </p>
				</div>
			</div>
		)
	}
}

export default Inbox
