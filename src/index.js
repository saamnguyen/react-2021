import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//Fake comments
function emit(id) {
	setInterval(() => {
		window.dispatchEvent(
			new CustomEvent(`lesson-${id}`, {
				detail: `Noi dung cmt cua lession-${id}`,
			})
		);
	}, 2000);
}

emit(1);
emit(2);
emit(3);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
