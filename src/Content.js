import { useLayoutEffect, useState } from "react";

function Content() {
	const [count, setCount] = useState(0);

	//Những trường hợp xử dụng như set state r check lại state đó trong useEffect xong set lại chính nó
	useLayoutEffect(() => {
		if (count > 3) {
			setCount(0);
		}
	}, [count]);

	const handleRun = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={handleRun}>Run</button>
		</div>
	);
}

export default Content;
