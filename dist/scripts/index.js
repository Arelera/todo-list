import TodoItem from './TodoItem.js';
import Project from './Project.js';

let currentProject = null;
let allProjects = [];

const todosColumn = document.querySelector('.todos-column');

// event listeners for all add ids
const addTitle = document.getElementById('add-title');
const addDate = document.getElementById('add-date');
const addPriority = document.getElementById('add-priority');
const addBtn = document.getElementById('add-btn');

// when add button is clicked, append a todo to todosColumn
addBtn.addEventListener('click', () => {
  // create a todo item
  let newTodoItem = TodoItem(addTitle, addDate, addPriority).todoItem;

  // addEventListener to new todo for viewing info
  newTodoItem.addEventListener('click', () => viewInfoEvent(newTodoItem));

  //add the new todo to the list
  todosColumn.appendChild(newTodoItem);
  cleanAddValues();
});

// when anywhere on the todo item is clicked, open info window
const viewInfoEvent = (item) => {
  item.addEventListener('click', () => {
    // view info tab
  });
};

// for cleaning the input values after a todo is added
const cleanAddValues = () => {
  addTitle.value = '';
  addDate.value = '';
  addPriority.value = '!';
};

// adding a project to the aside
const projectsAside = document.getElementById('aside');
document.getElementById('add-project').addEventListener('click', () => {
  // projects title from input
  let projectTitle = document.getElementById('add-project-title').value;

  const newProject = Project(projectTitle).project;

  // add an event listener to the project to open up a list of todos *** TODO
  newProject.addEventListener('click', () => {
    currentProject = newProject;
    console.log(currentProject); // idk
  });

  projectsAside.appendChild(newProject);
});
