import React, { Component, Redirect } from 'react'
import { createBoast } from '../../services/boast'
import './NewBoast.css'
import axios from 'axios'

class NewBoast extends Component {
	constructor(props) {
		super(props)
		this.state = {
			txt_content: '',
			from: '',
			about: ''
		}
	}

	handleSubmitInput(e) {
		e.preventDefault()
		let newBoast = {
			txt_content: this.state.txt_content,
			from: this.state.from,
			about: this.state.about
		}
		createBoast(newBoast)
	}

	handleTxtContent(e) {
		this.setState({
			txt_content: e.target.value
		})
	}
	handleFrom(e) {
		this.setState({
			from: e.target.value
		})
	}

	handleAbout(e) {
		this.setState({
			about: e.target.value
		})
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
									onChange={e => this.handleTxtContent(e)}
								/>
							</div>
							<div>
								<input
									type="text"
									name="from"
									placeholder="From: ex. Grandma Judy"
									onChange={e => this.handleFrom(e)}
								/>
							</div>
							<div>
								<input
									type="text"
									name="about"
									placeholder="About: ex. Jamesy"
									onChange={e => this.handleAbout(e)}
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
