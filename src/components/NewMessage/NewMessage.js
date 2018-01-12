import React, { Component } from 'react'
import RecipientBox from '../RecipientBox/RecipientBox'
import { createMessage } from '../../services/message'
import './NewMessage.css'

class NewMessage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			txt_content: ''
		}

		// this.createMessage = this.createMessage.bind(this)
	}

	handleSubmitInput(e) {
		e.preventDefault()

		let newMessage = {
			txt_content: this.state.txt_content
		}
		this.createMessage(newMessage)
	}

	render() {
		return (
			<div>
				<div className="form-container">
					<h2>What's worth bragging about?</h2>

					<form onSubmit={e => this.handleSubmitInput(e)} className="">
						<div className="inputs">
							<div>
								<input
									type="text"
									name="txt_content"
									className="form-field"
									placeholder="Brag about family here..."
								/>
							</div>
							<div>
								<input
									type="text"
									name="from"
									placeholder="From: ex. Grandma Judy"
								/>
							</div>
							<div>
								<input
									type="text"
									name="about"
									placeholder="About: ex. Jamesy"
								/>
							</div>
							<input type="submit" className="btn" value="Tell everyone!" />
						</div>
					</form>
				</div>
			</div>
		)
	}
}
export default NewMessage
