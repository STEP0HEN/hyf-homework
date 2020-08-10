import React, { Component } from "react";
import { RenderList } from "./Render";

const todos = [
	{
		id: 1,
		description: "Get out of bed",
	},
	{
		id: 2,
		description: "Brush teeth",
	},
	{
		id: 3,
		description: "Eat breakfast",
	},
	{
		id: 4,
		description: "Take a shower",
	},
	{
		id: 5,
		description: "Go to work",
	},
	{
		id: 6,
		description: "Go to the gym",
	},
	{
		id: 7,
		description: "Go Grocery Shopping",
	},
];


export class TodoList extends Component {
	state = {
		todoList: [],
	};

	addTodo = this.addTodo.bind(this);
	removeTodo = this.removeTodo.bind(this);
	checkboxHandler = this.checkboxHandler.bind(this);

	addTodo() {
		this.setState({
			todoList: [
				...this.state.todoList,
				todos[Math.floor(Math.random() * todos.length)],
			],
		});
	}

  removeTodo(id) {
    this.setState({
      todoList: this.state.todoList.filter((item) => {
        return item.id !== id;
      }),
    });
  }


	checkboxHandler(id) {
		this.setState({
			todoList: this.state.todoList.map((todo) => {
				if (id === todo.id) {
					return { ...todo, done: !todo.done };
				} else {
					return todo;
				}
			}),
		});
	}


	render() {
		return (
			<div>
				<button style={{ backgroundColor: "green" }} onClick={this.addTodo}>
					Add Todo
				</button>
				<ul>
					{this.state.todoList.map((todo) => {
						return (
							<RenderList
								key={todo.id}
								todos={todo}
								deleteTodo={() => this.removeTodo(todo.id)}
								checkboxHandler={() => this.checkboxHandler(todo.id)}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}
