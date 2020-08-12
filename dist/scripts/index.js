import TodoItem from './TodoItem.js';

const todosColumn = document.querySelector('.todos-column');

// event listeners for all add ids
const addTitle = document.getElementById('add-title');
const addDate = document.getElementById('add-date');
const addPriority = document.getElementById('add-priority');
const addBtn = document.getElementById('add-btn');

// when add button is clicked, append a todo to todosColumn
addBtn.addEventListener('click', () => {
  todosColumn.appendChild(TodoItem(addTitle, addDate, addPriority).todoItem);
  cleanAddValues();
});

let theDate = new Date();

// for cleaning the values after a todo is added
const cleanAddValues = () => {
  addTitle.value = '';
  addDate.value = '';
  addPriority.value = '!';
  addBtn.value = '';
};
