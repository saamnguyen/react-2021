import Content from "./Content";
import { useState, createContext } from "react";
import "./App.css";

export const ThemeContext = createContext(); //return 1 obj gom provider, consumer

//Context
//CompA => CompB => CompC

//Theme Dart/Night

function App() {
	const [theme, setTheme] = useState("dark");
	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};
	return (
		<ThemeContext.Provider value={theme}>
			<div style={{ padding: 20 }}>
				<button onClick={toggleTheme}>Toggle Theme</button>
				<Content />
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
