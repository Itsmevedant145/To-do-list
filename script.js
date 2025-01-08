document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-button');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    // Add Event Listener for the "Add" button
    addButton.addEventListener('click', () => {
      const todoText = todoInput.value.trim();
  
      // Ensure that the input is not empty
      if (todoText !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = todoText;
  
        // Create a Delete button for each todo item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
          li.remove();  // Remove the todo item from the list
        });
  
        // Append the delete button to the todo item
        li.appendChild(deleteButton);
  
        // Append the new todo item to the list
        todoList.appendChild(li);
  
        // Clear the input field
        todoInput.value = '';
      } else {
        alert('Please enter a task.');
      }
    });
  
    // Optional: Allow pressing "Enter" to add a task as well
    todoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addButton.click(); // Trigger the Add button click
      }
    });
  });
  