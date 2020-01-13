import React, { useState } from 'react';

function HookCounterThree() {
	const [name, setName] = useState({ firstName: '', lastName: '' });
	return (
		<form>
			<label>Input first name: </label>
			<input
				type="text"
				value={name.firstName}
				onChange={e => setName({ ...name, firstName: e.target.value })}
			/>
			<br />
			<label>Input last name: </label>
			<input
				type="text"
				value={name.lastName}
				onChange={e => setName({ ...name, lastName: e.target.value })}
			/>
			<br />
			<label>{JSON.stringify(name)}</label>

			<h2>First name: {name.firstName}</h2>
			<h2>Last name: {name.lastName}</h2>
		</form>
	);
}

export default HookCounterThree;
