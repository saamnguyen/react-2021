function logger(reducer) {
	return (prevState, action) => {
		console.group(action.type); //Nhom lai theo action: setJob, addJob, ...
		console.log("Prev state", prevState);
		console.log("Action", action);

		const newState = reducer(prevState, action);

		console.log("Next state", newState);
		console.groupEnd(); //Ket thuc nhom

		return newState;
	};
}

export default logger;
