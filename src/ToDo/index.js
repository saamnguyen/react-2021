import { useRef, useReducer } from "react";
import reducer, { initState } from "./reducer";
import { setJob, addJob, deleteJob } from "./actions";
import logger from "./logger";

function App() {
	const [state, dispatch] = useReducer(logger(reducer), initState);

	const inputRef = useRef();

	const handleSubmit = () => {
		dispatch(addJob(job));
		dispatch(setJob(""));

		inputRef.current.focus();
	};

	const { job, jobs } = state; //Dinh nghia lay ra state
	return (
		<div style={{ padding: 32 }}>
			<h3>Todo</h3>
			<input
				placeholder="Enter todo..."
				ref={inputRef}
				value={job}
				onChange={(e) => {
					dispatch(setJob(e.target.value));
				}}
			/>

			<button onClick={handleSubmit}>Add</button>
			<ul>
				{jobs.map((job, index) => (
					<li key={index}>
						{job}
						<span
							style={{ cursor: "pointer" }}
							onClick={() => dispatch(deleteJob(index))}
						>
							&times;
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
