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

export default function Todo() {
  const myToDoList = todo.map((task,index) => {
    return (
      <ul key={index}>
        <li>
          {task.description} , {task.deadline}
        </li>
      </ul>
    );
  });
  return <ul>{myToDoList}</ul>;
}


