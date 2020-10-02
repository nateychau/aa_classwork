import React from 'react';
import { uniqueId } from '../../util/todo_api_util.js'

class TodoForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {title: '', body: '', done: false, id: uniqueId()}
        this.updateTitle = this.updateTitle.bind(this)
        this.updateBody = this.updateBody.bind(this)
        this.updateDone = this.updateDone.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.selectTrue = this.state.done ? 'checked' : '';
        this.selectFalse = !this.state.done ? 'checked' : '';

    }

    handleSubmit(e){
        e.preventDefault();
        const todo = this.state;
        this.props.receiveTodo(todo);
        this.setState({title: '', body: '', done: '', id: uniqueId()});
    }

    updateTitle(e){
        this.setState({ title: e.target.value })
    }

    updateBody(e){
        this.setState({ body: e.target.value })
    }

    updateDone(e){
        if(e.target.value === "true" && !this.state.done){
            this.setState({ done: true });
            this.selectTrue = 'checked';
            this.selectFalse = '';
        }else if (e.target.value === "false" && this.state.done){
            this.setState({done: false})
            this.selectTrue = '';
            this.selectFalse = 'checked';
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Title
                    <input type="text" value={this.state.title} onChange={this.updateTitle}/>
                </label>
                <label>Body
                    <input type="text" value={this.state.body} onChange={this.updateBody}/>
                </label>
                <label onClick = {this.updateDone}>Done?
                    <input type="radio" value="true" checked={this.selectTrue}/>
                    <input type="radio" value="false" checked={this.selectFalse}/>
                </label>
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}

export default TodoForm;