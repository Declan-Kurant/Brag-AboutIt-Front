import React, { Component } from 'react'
import { createBoast } from '../../services/boast'
import './NewBoast.css'

class NewBoast extends Component {
	constructor(props) {
		super(props)
		this.state = {
			txt_content: '',
			from: '',
			about: ''
		}

		// this.createBoast = this.createBoast.bind(this)
	}

	handleSubmitInput(e) {
		e.preventDefault()

		let newBoast = {
			txt_content: this.state.txt_content,
			from: this.state.from,
			about: this.state.about
		}
		this.createBoast(newBoast)
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
export default NewBoast
