import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';

function App() {
	return (
		<div className="App">
			<label>Class counter:</label>
			<ClassCounter />
			<hr />
			<label>UseState hook counter:</label>
			<HookCounter />
			<hr />
			<label>UseState hook counter with previous state:</label>

			<HookCounterTwo />
			<hr />
			<label>UseState hook counter with an object:</label>

			<HookCounterThree />
			<hr />
		</div>
	);
}

export default App;
