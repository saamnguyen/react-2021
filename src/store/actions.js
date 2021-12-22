import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO } from "./constants";

export const setToDoInput = (payload) => ({
	type: SET_TODO_INPUT,
	payload,
});

export const addToDo = (payload) => ({
	type: ADD_TODO,
	payload,
});

export const deleteToDo = (payload) => ({
	type: DELETE_TODO,
	payload,
});
