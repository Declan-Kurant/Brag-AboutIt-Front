import React, { Component } from 'react'
import './BoastList.css'

class BoastList extends Component {
	render() {
		return (
			<div className="message-list">
				<div className="individual-message">
					<p className="from">
						{' '}
						From : <strong>Savta Rena</strong>{' '}
					</p>
					<p className="about">
						{' '}
						About : <strong>Jimmy</strong>{' '}
					</p>
					<p className="message">I cant believe my grandson learned to code!</p>
				</div>
				<div className="individual-message">
					<p className="from">
						{' '}
						From : <strong>Savta Rena</strong>{' '}
					</p>
					<p className="about">
						{' '}
						About : <strong>Jimmy</strong>{' '}
					</p>
					<p className="message">I cant believe my grandson learned to code!</p>
				</div>
				<div className="individual-message">
					<p className="from">
						{' '}
						From : <strong>Savta Rena</strong>{' '}
					</p>
					<p className="about">
						{' '}
						About : <strong>Jimmy</strong>{' '}
					</p>
					<p className="message">I cant believe my grandson learned to code!</p>
				</div>
			</div>
		)
	}
}

export default BoastList
