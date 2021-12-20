import { SET_JOB, ADD_JOB, DELETE_JOB } from "./constants";

export const initState = {
	job: "",
	jobs: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case SET_JOB:
			return {
				...state, //Bao luu state cu
				job: action.payload, //con nhung state can thay doi thi doi o day
			};
			break;
		case ADD_JOB:
			return {
				...state,
				jobs: [...state.jobs, action.payload],
			};
			break;
		case DELETE_JOB:
			const newJobs = [...state.jobs];
			newJobs.splice(action.payload, 1);
			return {
				...state,
				jobs: newJobs,
			};
			break;
		default:
			throw new Error("Invalid");
	}
};

export default reducer;
