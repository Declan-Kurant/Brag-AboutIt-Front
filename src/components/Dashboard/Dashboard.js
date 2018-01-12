import React from 'react'
import { Link } from 'react-router-dom'

import './Dashboard.css'

const Dashboard = () => (
	<header>
		<div className="nav">
			<div className="app-name">
				<h2 id="brag">Brag AboutIt</h2>
			</div>
			<div className="nav-container">
				<nav>
					<div className="nav-item-small">
						<Link to="/boastlist"> Home </Link>
					</div>
					<div className="nav-item">
						<Link to="/new-boast"> Brag About Someone </Link>
					</div>
				</nav>
			</div>
		</div>
	</header>
)

export default Dashboard
