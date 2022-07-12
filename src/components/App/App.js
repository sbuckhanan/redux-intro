import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';
import ElementList from '../ElementList/ElementList';
import Counter from '../Counter/Counter';

function App() {
	//? use selector accepts a function that tells it what part of the store you want
	//? here we return the whole store

	return (
		<div className='App'>
			<Header />
			<Form />
			<Counter />
			<ElementList />
		</div>
	);
}

export default App;
