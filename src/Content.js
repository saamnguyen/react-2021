import { useEffect, useState } from "react";

function Content() {
	const [count, setCount] = useState(1);

	useEffect(() => {
		console.log(`Mount or Re-render lan ${count}`);

		return () => console.log(`Cleanup lan ${count}`);
	}, [count]);

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>Click me!</button>
		</div>
	);
}

export default Content;
