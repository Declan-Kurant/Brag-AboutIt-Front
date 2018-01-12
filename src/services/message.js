import axios from 'axios'

let servicePath = 'http://localhost:3001'
// if (document.location.hostname === 'localhost') {
// 	servicePath = 'http://localhost:3001'
// }
//DEPLOYED LINK
//else {
// 	servicePath = 'https://cool-beans-api.herokuapp.com'
// }

export function createMessage(newMessage) {
	axios
		.post(`${servicePath}/messages`, newMessage)
		.then(response => {
			this.props.history.push('/messages')
		})
		.catch(err => {
			console.log(err)
		})
}

// export function getMessages() {
// 	console.log('getting messages')
// 	axios
// 		.get(`http://localhost:3001/messages`)
// 		.then(res => {
// 			this.setState((messages = res.data))
// 		})
// 		.catch(err => console.log(err))
// }

export default {
	createMessage
	// getMessages
}
