import React from "react";
import { useState } from "react";

export default function Counter(props) {
	const { initial } = props;

	// console.log(initial);

	const [counter, setCounter] = useState(initial);
	const handleChange = (value) => {
		console.log("value:", value, "setcounter:", counter + value);
		// setCounter(value + counter);

		if (value <= 1) {
			setCounter(value + counter);
		} else if (value > 2) {
			setCounter(value + counter - 2);
		} else {
			setCounter(value + counter);
		}
	};

	return (
		<div>
			<h1>Counter: {counter}</h1>
			<button
				onClick={() => {
					handleChange(1);
				}}>
				Increment
			</button>
			<button
				onClick={() => {
					if (counter >= 1) {
						handleChange(-1);
					}
				}}>
				Decrement
			</button>
			<button
				onClick={() => {
					handleChange(counter + 2);
				}}>
				Double Increment
			</button>
		</div>
	);
}
