import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="Team" placeholder="Team,..."/>
		<input type="text" name="League" placeholder="League..."/>
		<button>Get the Results!</button>
	</form>
);

export default Form;
