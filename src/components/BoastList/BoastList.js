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
		axios
			.get(`http://localhost:3001/boasts`)
			.then(res => {
				this.setState((this.state.messages = res.data))
				console.log(this.state.messages[2].from)
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
		let fontSize = this.state.largeFont ? 'large-p-tag' : ''
		let messages = this.state.messages.map((message, index) => {
			return (
				<div className={'boast-list'}>
					{this.state.messages.length && (
						<div>
							<div key={index} className="individual-boast">
								<p className="from">
									{' '}
									From : <strong>{message.from}</strong>{' '}
								</p>
								<p className="about">
									{' '}
									About : <strong>{message.about}</strong>{' '}
								</p>
								<p className="boast">{message.txt_content}</p>
							</div>
						</div>
					)}
				</div>
			)
		})
		return (
			<div className={fontSize}>
				<div className="selectors">
					<button
						className={('size-selector', 'small')}
						onClick={e => this.handleSmallFont(e)}
					>
						small
					</button>
					<button
						type="button"
						className={('size-selector', 'big')}
						onClick={e => this.handleLargeFont(e)}
					>
						BIG
					</button>
				</div>
				{messages}
			</div>
		)
	}
}

export default BoastList
