import React from 'react'

class TodoListItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (<>
            <li>{this.props.todo.title}</li>
            <li>{this.props.todo.body}</li>
            <li>{this.props.todo.done ? 'Done' : "Not Done"}</li> </>)
    }
}

export default TodoListItem;