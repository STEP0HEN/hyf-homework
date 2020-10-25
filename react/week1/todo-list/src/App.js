import React from "react";
import Todo from "./Component/Todo";
import Title from "./Component/Title";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <Title />
        <Todo />
      </div>
    </div>
  );
};

export default App;
