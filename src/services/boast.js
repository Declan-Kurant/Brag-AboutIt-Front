import axios from 'axios'

let servicePath = 'http://localhost:3001'

export function createBoast(newBoast) {
	console.log(newBoast)
	axios
		.post(`${servicePath}/boasts`, newBoast)
		.then(response => {
			this.props.history.push('/boasts')
		})
		.catch(err => {
			console.log(err)
		})
}

export default {
	createBoast
	// getBoasts
}
