import React, { Component } from 'react'
import './BoastList.css'
import axios from 'axios'

class BoastList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			messages: [],
			largeFont: false // if false p tags have empty class, if true they get a new class 'larger' where font-size = 160%
		}
		// this.handleFontSize = this.handleFontSize.bind(this)
		axios
			.get(`http://localhost:3001/boasts`)
			.then(res => {
				this.setState((this.state.messages = res.data))
				console.log(this.state.messages[2].txt_content)
			})
			.catch(err => console.log(err))
	}

	handleLargeFont(e) {
		e.preventDefault()
		this.setState({
			largeFont: true
		})
	}

	handleSmallFont(e) {
		e.preventDefault()
		this.setState({
			largeFont: false
		})
	}
	render() {
		// console.log(this.state.messages[2])
		// console.log(this.state.messages[2].txt_content)   THIS IS WHERE IT BREAKS

		let fontSize = this.state.largeFont ? 'large-p-tag' : ''

		return (
			<div>
				{this.state.messages && (
					<div>
						<div className={fontSize}>
							<div className="boast-list">
								<div className="selectors">
									<button
										className={('size-selector', 'small')}
										onClick={e => this.handleSmallFont(e)}
									>
										small letters
									</button>
									<button
										type="button"
										className="size-selector"
										onClick={e => this.handleLargeFont(e)}
									>
										big letters
									</button>
								</div>
								<div className="individual-boast">
									<p className={fontSize} className="from">
										{' '}
										From : <strong>Savta Rena</strong>{' '}
									</p>
									<p className="about">
										{' '}
										About : <strong>Jimmy</strong>{' '}
									</p>
									<p className="boast">
										I cant believe my grandson learned to code!
									</p>
								</div>

								<div className="individual-boast">
									<p className="from">
										{' '}
										From : <strong>{this.state.messages.from}</strong>{' '}
									</p>
									<p className="about">
										{' '}
										About : <strong>{this.state.messages.about}</strong>{' '}
									</p>
									<p className="boast">
										{' '}
										{/* boast: {this.state.messages[2].txt_content} */}
									</p>
								</div>

								<div className="individual-boast">
									<p className="from">
										{' '}
										From : <strong>Savta Rena</strong>{' '}
									</p>
									<p className="about">
										{' '}
										About : <strong>Jimmy</strong>{' '}
									</p>
									<p className="boast">
										I cant believe my grandson learned to code!
									</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		)
	}
}

export default BoastList
