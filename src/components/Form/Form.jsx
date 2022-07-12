import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Form() {
	const [newElement, setNewElement] = useState('');
	const dispatch = useDispatch();

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				dispatch({ type: 'ADD_ELEMENT', payload: newElement });
				setNewElement('');
			}}>
			<input
				value={newElement}
				type='text'
				placeholder='NAME HERE'
				onChange={(event) => {
					setNewElement(event.target.value);
				}}
			/>
			<button type='submit'>Submit</button>
		</form>
	);
}

export default Form;
