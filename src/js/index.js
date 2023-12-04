import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import ToDoList from "./component/ToDoList";

const App = () => {
	return (
		<>
		<ToDoList/>
		</>
	);
};


ReactDOM.render(<App />, document.querySelector("#app"));