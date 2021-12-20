import Content from "./Content";
import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

//Context
//CompA => CompB => CompC

//Theme Dart/Night

function App() {
	const context = useContext(ThemeContext);
	return (
		<div style={{ padding: 20 }}>
			<button onClick={context.toggleTheme}>Toggle Theme</button>
			<Content />
		</div>
	);
}

export default App;
