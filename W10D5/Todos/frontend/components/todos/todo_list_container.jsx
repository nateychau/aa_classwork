import { connect } from 'react-redux';
import TodoList from './todo_list.jsx';
import { receiveTodo } from '../../actions/todo_actions.js';
import { allTodos } from '../../reducers/selectors.js';

const mapDispatchToProps = (dispatch) => {
    return {receiveTodo: (todo) => {
        return dispatch(receiveTodo(todo))
    }}
}

const mapStateToProps = (state) => {
    return {
        todos: allTodos(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)