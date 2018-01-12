import React from 'react'
import { Link } from 'react-router-dom'

import './Dashboard.css'

const Dashboard = () => (
	<header>
		<div className="nav">
			<div className="app-name">
				<h2>Brag AboutIt</h2>
			</div>
			<div className="nav-container">
				<nav>
					<div className="nav-item-small">
						<Link to="/boastlist"> Home </Link>
					</div>
					<div className="nav-item">
						<Link to="/new-message"> Brag About Someone </Link>
					</div>
					<div className="nav-item">small letters</div>
					<div className="nav-item">big letters</div>
				</nav>
			</div>
		</div>
	</header>
)

export default Dashboard
