import React, { Component } from 'react'

import './Message.css'

// IMPORT METHODS FROM SERVICES import { getCoffee, removeCoffee, updateCoffee } from '../../services/coffee'

class Message extends Component {
	constructor() {
		super()

		this.state = {
			txt_content: '',
			audio: ''
			// recurring_status: False, //if true, message is sent more than once
			// delivery_date: date
		}
		//BIND METHODS HERE if defined below EX. this.editCoffee = this.editCoffee.bind(this)
	}
	render() {
		return (
			<div>
				<h1> Message component </h1>
				<div>
					<div className="play-btn">
						<img src="../../public/playpause.png" alt="play button" />
					</div>

					<div className="SOUNDPLAYBACK API" />

					<div className="txt-content">
						<h5> {this.state.txt_content} </h5>
					</div>
				</div>
			</div>
		)
	}
}

export default Message
