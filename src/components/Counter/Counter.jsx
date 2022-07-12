import { useSelector, useDispatch } from 'react-redux';

function Counter() {
	const count = useSelector((store) => store.count);

	const dispatch = useDispatch();

	return (
		<>
			<p>Count is: {count}</p>
			<button onClick={() => dispatch({ type: 'INCREASE' })}>Increase!</button>
			<button disabled={count < 1} onClick={() => dispatch({ type: 'DECREASE' })}>
				Decrease!
			</button>
		</>
	);
}

export default Counter;
