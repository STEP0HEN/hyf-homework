import React,{Component} from "react";
import PropTypes from "prop-types";

export const RenderList = (props) => {
	const editstate = props.todos.editstate;

	const details = editstate ? (
		<input
			type="text"
			placeholder="update todo"
			onChange={(event) => {
				const updatedEvent = event.target.value;

				return props.updatedTodo(updatedEvent);
			}}
		/>
	) : (
		` ${props.todos.description}  ||  ${props.todos.deadline}`
	);

	const todoDone = props.todos.completed;
	return (
		<ul
			id="lists"
			style={{ textDecoration: todoDone ? "line-through" : "none" }}
		>
			<li>
				{" "}
				{details}
				<input type="checkbox" onChange={props.checkboxHandler}></input>
				<button onClick={props.deleteTodo}> Delete</button>
				<input
					type="button"
					value={editstate ? "Update" : "Edit"}
					onClick={props.updateTodo}
				/>
			</li>
		</ul>
	);
}

export class Todo extends Component {
	state = {
		todoList: [],
		todoDescription: "",
		todoDeadline: "",
		updateInput: "",
	};

	componentDidMount = () => {
		const url =
			"https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";
		fetch(url)
			.then((data) => data.json())
			.then((response) => {
				this.setState({
					todoList: response.map((data) => data),
				});
			});
	};

	addTodo = (todoDescription, todoDeadline) => {
		const today = new Date();
		const selectedDate = new Date(todoDeadline);

		if (todoDescription === "" || todoDeadline === "") {
			alert("sorry, no empty inputs");
		} else if (selectedDate < today) {
			alert("sorry date can't be past");
		} else {
			this.setState({
				todoList: [
					...this.state.todoList,
					{
						description: todoDescription,
						completed: false,
						deadline: todoDeadline,
					},
				],
			});
		}
	};

	updatedTodo = (updateValue) => {
		this.setState({ updateInput: updateValue });
	};

	update = (id) => {
		this.setState({
			todoList: this.state.todoList.map((todo, index) => {
				if (id === index) {
					return {
						...todo,
						description: this.state.updateInput,
						editstate: !todo.editstate,
					};
				} else {
					return todo;
				}
			}),
		});
	};

	editTodo = (id) => {
		this.setState({
			todoList: this.state.todoList.map((todo, index) => {
				if (id === index) {
					return { ...todo, editstate: !todo.editstate };
				} else {
					return todo;
				}
			}),
		});
	};

	checkboxHandler = (id) => {
		this.setState({
			todoList: this.state.todoList.map((todo, index) => {
				if (id === index) {
					return { ...todo, completed: !todo.completed };
				} else {
					return todo;
				}
			}),
		});
	};

	removeTodo = (id) => {
		this.setState({
			todoList: this.state.todoList.filter((todo, index) => {
				return index !== id;
			}),
		});
	};

	render() {
		return (
			<div>
				<form
					onSubmit={(event) => {
						event.preventDefault();

						this.addTodo(this.state.todoDescription, this.state.todoDeadline);
						this.setState({ todoDescription: "", todoDeadline: "" });
					}}
				>
					Todo description :
					<input
						type="text"
						placeholder="Todo description"
						value={this.state.todoDescription}
						onChange={(event) => {
							this.setState({
								todoDescription: event.target.value,
							});
						}}
					/>
					Deadline :
					<input
						type="date"
						value={this.state.todoDeadline}
						onChange={(event) => {
							this.setState({
								todoDeadline: event.target.value,
							});
						}}
					/>
					<button
						type="submit"
						style={{ backgroundColor: "#008000", margin: "5px" }}
					>
						Add Todo
					</button>
				</form>
				{this.state.todoList.map((todo, index) => {
					return (
						<RenderList
							todos={todo}
							key={index}
							deleteTodo={() => this.removeTodo(index)}
							checkboxHandler={() => this.checkboxHandler(index)}
							editTodo={() => this.editTodo(index)}
							updateTodo={() => this.update(index)}
							updatedTodo={this.updatedTodo}
						/>
					);
				})}
			</div>
		);
	}
}


RenderList.propTypes = {
	todos: PropTypes.object.isRequired
}