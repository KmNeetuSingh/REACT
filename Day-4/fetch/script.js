document.addEventListener('DOMContentLoaded', function() {
    fetchTodos();
});

function fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        displayTodos(data);
    })
    .catch(error => console.error('Error fetching todos:', error));
}

function displayTodos(todos) {
    const todoContainer = document.getElementById('todo-container');
    
    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        
        const title = document.createElement('span');
        title.textContent = todo.title;
        
        const selectButton = document.createElement('button');
        selectButton.classList.add('select-button');
        selectButton.textContent = '✓'; // Use any symbol you prefer for the button
        selectButton.addEventListener('click', function() {
            // Toggle selected class when clicked
            todoItem.classList.toggle('selected');
            console.log('Selected:', todo.title);
        });
        
        todoItem.appendChild(title);
        todoItem.appendChild(selectButton);
        todoContainer.appendChild(todoItem);
    });
}
