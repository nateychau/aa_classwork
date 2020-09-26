

// const todos = [];
const todoList = document.querySelector('ul.todos');
const todoForm = document.querySelector('form.add-todo-form');

function addTodo(){
    let input = document.querySelector('.add-todo-form').firstElementChild;
    
    let todo  = {
        val: input.value,
        done: false
    };
    // todos.push(todo);
    input.value = '';
        let label = document.createElement('label');
        label.innerHTML = todo.val;
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        if(todo.done){
            checkbox.checked = true;
        }
        let li = document.createElement('li');
        li.append(label);
        li.append(checkbox);
        todoList.append(li);
}
// function populateList(){
//     todos.forEach((todo) => {
//         let label = document.createElement('label');
//         label.innerHTML = todo.val;
//         let checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';
//         if(todo.done){
//             checkbox.checked = true;
//         }
//         let li = document.createElement('li');
//         li.append(label);
//         li.append(checkbox);
//         todoList.append(li);
        
//     })
//     todos = [];
// }

todoForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    addTodo();
})
