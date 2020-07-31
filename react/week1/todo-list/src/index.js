import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const todo = [
	{
		description: " Get out of bed",
		deadline: " Wed Sep 13 2017",
	},
	{
		description: "Brush teeth",
		deadline: " Thu Sep 14 2017",
	},

	{
		description: "Eat breakfast",
		deadline: "Fri Sep 15 2017 ",
	},
];

class Title extends React.Component {
	render() {
		return <h1>Todo List</h1>;
	}
}

const Todo = (props) => {
	const list = props.list;
	const myToDoList = list.map((tasks) => {
		return (
			<li>
				{tasks.description} , {tasks.deadline}
			</li>
		);
	});
	return <ul>{myToDoList}</ul>;
};

ReactDOM.render(
	<div className="container">
		<Title />
		<Todo list={todo} />
	</div>,
	document.getElementById("root")
);
