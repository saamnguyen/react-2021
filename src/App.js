import { useState, useRef, useEffect } from "react";
import Content from "./Content";

//to do list

function App() {
	const [count, setCount] = useState(60);

	const timerId = useRef();
	const prevCount = useRef();

	const handleStart = () => {
		timerId.current = setInterval(() => {
			setCount((prev) => prev - 1);
		}, 1000);
		console.log(timerId + "start");
	};

	const handleStop = () => {
		clearInterval(timerId.current);
		console.log(timerId + "stop");
	};

	useEffect(() => {
		prevCount.current = count;
	}, [count]);

	console.log(count, prevCount.current);

	return (
		<div style={{ padding: 32 }}>
			<h1>{count}</h1>
			<button onClick={handleStart}>Start</button>
			<button onClick={handleStop}>Stop</button>
		</div>
	);
}

export default App;
