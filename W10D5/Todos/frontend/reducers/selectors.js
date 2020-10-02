export const allTodos = (state) => {
    let todoArray = Object.keys(state.todos).map((key) => {
        return state.todos[key];
    })
    return todoArray;
}