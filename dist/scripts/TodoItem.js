const TodoItem = (
  title = 'Do something', // default values dont work, maybe scrap it
  dueDate = '2050-12-12', // or make it work somehow
  priority,
  description = ''
) => {
  const todoItem = document.createElement('div');
  todoItem.classList.add('todo-item');

  let todoItemHtml = `
    <h3 class="title-s">${title.value}</h3>
    <div class="todo-right">
      <h3 class="due-date">${dueDate.value}</h3>
      <h3 class="priority">${priority.value}</h3>
      <button class="btn">
        <ion-icon class="icon-s" name="checkmark"></ion-icon>
      </button>
    </div>`;

  todoItem.innerHTML = `
  <h3 class="title-s">${title.value}</h3>
  <div class="todo-right">
    <h3 class="due-date">${dueDate.value}</h3>
    <h3 class="priority">${priority.value}</h3>
    <button class="btn">
      <ion-icon class="icon-s" name="checkmark"></ion-icon>
    </button>
  </div>`;

  return { todoItem };
};

export default TodoItem;
