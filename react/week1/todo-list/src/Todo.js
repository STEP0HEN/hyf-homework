import React from "react";


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


 function Todo () {

		 const myToDoList = todo.map((tasks) => {
			 return (
				 <li>
				{tasks.description} , {tasks.deadline}
			</li>
		);
	});
	return <ul>{myToDoList}</ul>;

};

export { Todo };