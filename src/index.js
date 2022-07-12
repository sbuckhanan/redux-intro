import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//? instead of this
//? const [count, setCount] = useState(0)
//? We will use the reducer

//? REDUCER
const count = (state = 0, action) => {
	console.log('Hey! I am a Reducer!', action);

	switch (action.type) {
		case 'INCREASE':
			// console.log('You clicked increase');
			return state + 1;
		case 'DECREASE':
			// console.log('You clicked increase');
			return state - 1;
		default:
			return state;
	}
};

const elementList = (state = [], action) => {
	switch (action.type) {
		case 'ADD_ELEMENT':
			console.log(`The element is ${action.payload}`);
			//? create new array
			//? which includes values from prev array
			//? adds new thing to the end
			return [...state, action.payload];
		default:
			return state;
	}
};

//? STORE
const storeInstance = createStore(
	combineReducers({
		count,
		elementList,
	}),
	//? tell redux we would like to use our new logger
	applyMiddleware(logger)
);

//? PROVIDER (lets redux and react talk to one another)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={storeInstance}>
			<App />
		</Provider>
	</React.StrictMode>
);
