import React, { useReducer } from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import EffectHookCounterOne from './EffectHookCounterOne';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentA from './components/ComponentA';
import ReducerCounter from './components/ReducerCounter';
import ReducerCounterTwo from './components/ReducerCounterTwo';
import ReducerCounterThree from './components/ReducerCounterThree';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1;
		case 'decrement':
			return state - 1;
		case 'reset':
			return initialState;
		default:
			return state;
	}
};

function App() {
	const [count, dispatch] = useReducer(reducer, initialState);
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
			<hr />
			<EffectHookCounterOne />
			<hr />
			<MouseContainer />
			<hr />
			<IntervalHookCounter />
			<hr />
			<DataFetching />
			<hr />
			<hr />
			<h2>useContext hook</h2>
			<hr />
			<UserContext.Provider value={'username1'}>
				<ChannelContext.Provider value={'channel1'}>
					<ComponentA />
				</ChannelContext.Provider>
			</UserContext.Provider>
			<hr />
			<hr />
			<h2>useReducer hook</h2>
			<hr />
			<ReducerCounter />
			<hr />
			<ReducerCounterTwo />
			<hr />
			<ReducerCounterThree />
			<hr />
			<h2>useReducer + useContext</h2>
			<hr />
			Count - {count}
			<CountContext.Provider
				value={{ countState: count, countDispatch: dispatch }}
			>
				<Component1 />
				<Component2 />
				<Component3 />
			</CountContext.Provider>
			<hr />
			<h2>data fetching setEffect setState</h2>
			<DataFetchingOne />
			<hr />
			<h2>data fetching setEffect reducer</h2>
			<DataFetchingTwo />
			<hr />
		</div>
	);
}

export default App;
