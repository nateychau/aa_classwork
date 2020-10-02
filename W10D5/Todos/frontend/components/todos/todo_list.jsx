import React from "react"
import TodoListItem from "../todos_list/todo_list_item";
import TodoForm from "../todos_list/todo_form"

const todoList = (props) => {
    debugger
    let todoArray = props.todos.map((todo)=>{
        return (
            <TodoListItem todo={todo} key={todo.id}/>
            // <>
            // <li>{todo.title}</li>
            // <li>{todo.body}</li>
            // <li>{todo.done ? 'Done' : "Not Done"}</li> </>
        )
    })
    return (
        <div>
            <ul>{todoArray}</ul>
            <TodoForm receiveTodo = {props.receiveTodo}/>
        </div>
    )
}

export default todoList