import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';

function App() {
	return (
		<div className="App">
			<h2>useState hook</h2>
			<hr />
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

			<HookCounterFour />
			<hr />
			<hr />
			<h2>useEffect hook</h2>
			<hr />
			<ClassCounterOne />
		</div>
	);
}

export default App;
