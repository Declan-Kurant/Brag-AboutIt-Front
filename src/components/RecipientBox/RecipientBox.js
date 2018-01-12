import React from 'react'
import { Link } from 'react-router-dom'

const RecipientBox = () => (
	<div className="recipient-box">
		<form>
			<input type="text" name="recipient" />
			<input type="datetime-local" name="delivery" value="" />
		</form>
	</div>
)

export default RecipientBox
