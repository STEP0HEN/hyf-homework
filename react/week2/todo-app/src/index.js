import React from 'react';
import ReactDOM from 'react-dom';
import {TodoList} from "./Todo";
import {Title} from "./Title";
import {Timer} from "./Timer";
import './index.css';

ReactDOM.render(
  <div className="center">
  <Title />
  <Timer />
  <TodoList />
  </div>,
  document.getElementById('root')
);
