import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import {receiveTodos, receiveTodo} from "./actions/todo_actions";
import App from "./components/app";
import Root from "./components/root";
import { allTodos } from "./reducers/selectors";


document.addEventListener('DOMContentLoaded', ()=>{
    const root = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, root);
    window.store = store;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.allTodos = allTodos; 
})

// const newTodos = [{id:1, title: "do hw", body:"by tonight", done:false},
//                 {id:2, title:"wash dishes", body:"use soap", done: false}]