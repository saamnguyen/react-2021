import { memo } from "react";

function Content({ onIncrease }) {
	console.log("re-render");
	return (
		<div>
			<h1>Hello World </h1>
			<button onClick={onIncrease}>Click!</button>
		</div>
	);
}

export default memo(Content);
