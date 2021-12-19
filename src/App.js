import { useRef, useReducer } from "react";
import Content from "./Content";

//to do list
//Init State
const initState = {
	job: "",
	jobs: [],
};

//Actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
	return {
		type: SET_JOB,
		payload: payload,
	};
};

const addJob = (payload) => {
	return {
		type: ADD_JOB,
		payload: payload,
	};
};

const deleteJob = (payload) => {
	return {
		type: DELETE_JOB,
		payload: payload,
	};
};

//console.log(setJob("Rua bat"));

//Reducer
const reducer = (state, action) => {
	console.log("Action", action);
	console.log("PrevState", state);

	let newState;

	switch (action.type) {
		case SET_JOB:
			newState = {
				...state,
				job: action.payload,
			};
			break;
		case ADD_JOB:
			newState = {
				...state,
				jobs: [...state.jobs, action.payload],
			};
			break;
		case DELETE_JOB:
			const newJobs = [...state.jobs];
			newJobs.splice(action.payload, 1);
			newState = {
				...state,
				jobs: newJobs,
			};
			break;
		default:
			throw new Error("Invalid");
	}

	console.log("NewSttate", newState);
	return newState;
};

function App() {
	const [state, dispatch] = useReducer(reducer, initState);

	const inputRef = useRef();

	const handleSubmit = () => {
		dispatch(addJob(job));
		dispatch(setJob(""));

		inputRef.current.focus();
	};

	const { job, jobs } = state;
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
