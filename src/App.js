import { useStore, actions } from "./store";

function App() {
	const [state, dispatch] = useStore();

	const { todos, todoInput } = state;

	const hanldeAdd = () => {
		dispatch(actions.addToDo(todoInput));
	};

	return (
		<div style={{ padding: 20 }}>
			<input
				value={todoInput}
				placeholder="Enter"
				onChange={(e) => {
					dispatch(actions.setToDoInput(e.target.value));
				}}
			/>

			<button onClick={hanldeAdd}>ADD</button>

			{todos.map((todo, index) => (
				<li key={index}>{todo}</li>
			))}
		</div>
	);
}

export default App;
