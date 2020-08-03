import React from "react";
import ReactDOM from "react-dom";
import {Todo} from "./Todo";
import {Title }from "./Title";
import "./index.css";


ReactDOM.render(
	<div className="container">
		<Title />
		<Todo />
	</div>,
	document.getElementById("root")
);
