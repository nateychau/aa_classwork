import {RECEIVE_TODOS, RECEIVE_TODO} from "../actions/todo_actions"

const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};


const todosReducer = (state = initialState, action)=>{
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_TODOS: 
            const new_state = {};
            action.todos.forEach((todo)=>{
                new_state[todo.id] = todo;
            })
            return new_state;
        case RECEIVE_TODO:
            const copy_state = Object.assign({},state);
            copy_state[action.todo.id] = action.todo; 
            return copy_state;
        default:
            return state;
    }
}


export default todosReducer;