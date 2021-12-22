function logger(reducer) {
	return (preState, action) => {
		console.group(action.type);

		console.log("PreState: ", preState);
		console.log("Action: ", action);

		const nextState = reducer(preState, action);

		console.log("NextState: ", nextState);

		console.groupEnd();

		return nextState;
	};
}

export default logger;
