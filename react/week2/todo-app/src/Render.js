import React from "react";

const RenderList = (props) => {
	const todoDone = props.todos.done;
	return (
		<li style={{ textDecoration: todoDone ? "line-through" : "none" }}>
			{props.todos.description}

			<input type="checkbox" onChange={props.checkboxHandler}></input>
			<button onClick={props.deleteTodo}> Delete</button>
		</li>
	);
};

export { RenderList };