import React, { Link, Component } from 'react'
import Message from '../Message/Message.js'
import { getMessages } from '../../services/message.js'

import axios from 'axios'

let servicePath = 'http://localhost:3001'
class Test extends Component {
	constructor(props) {
		super(props)
		console.log('testing')
		this.state = {
			messages: []
		}

		axios
			.get(`http://localhost:3001/messages`)
			.then(res => {
				this.setState((this.state.messages = res.data))
				console.log(this.state.messages[2].txt_content)
			})
			.catch(err => console.log(err))
	}

	render() {
		// console.log(this.state.messages)
		console.log(this.state.messages[2])
		return (
			<div>
				<p> st </p>
			</div>
		)
	}
}

export default Test
// {this.state.messages[1].txt_content}
