import { useState } from "react";
import Content from "./Content";

//to do list

function App() {
	const [count, setCount] = useState(0);

	const increase = () => {
		setCount(count + 1);
	};

	return (
		<div style={{ padding: 32 }}>
			<Content count={count} />
			<h1>{count}</h1>
			<button onClick={increase}>Click!</button>
		</div>
	);
}

export default App;
