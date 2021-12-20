import { ThemeContext } from "./App";
import { useContext } from "react";

function Paragraph() {
	const theme = useContext(ThemeContext);

	return <p className={theme}>Hello World</p>;
}

export default Paragraph;
