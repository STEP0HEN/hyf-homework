import React from 'react';
import ReactDOM from 'react-dom';
import {Title} from "./Components/Title";
import {Timer} from "./Components/Timer";
import {Todo} from "./Components/Todo";
import './index.css';


const root = document.getElementById('root')

ReactDOM.render(
  <div className="center">
  <Title />
  <Timer />
  <Todo />
  </div>,
   root
);