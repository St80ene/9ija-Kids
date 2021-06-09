import React from 'react'


export default function Form(props) {
	

	return (
		<form action="">
			<input
				type="text"
				value={props.name}
				onChange={props.handleChange}
				name=""
				id=""
			/>
			<input
				type="text"
				value={props.description}
				onChange={props.handleDescriptionChange}
				name=""
				id=""
			/>
		</form>
	);
}
