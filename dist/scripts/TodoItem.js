const TodoItem = (
  title, // default values dont work, maybe scrap it
  dueDate, // or make it work somehow
  priority,
  description
) => {
  const todoItem = document.createElement('div');
  todoItem.classList.add('todo-item');

  todoItem.innerHTML = `
  <h3 class="title-s">${title.value}</h3>
  <div class="todo-right">
    <h3 class="title-s due-date">${dueDate.value}</h3>
    <h3 class="title-s priority">${priority.value}</h3>
    <button class="btn btn-del">
      <ion-icon class="icon-s" name="trash-outline"></ion-icon>
    </button>
    <button class="btn btn-complete">
      <ion-icon class="icon-s" name="checkmark"></ion-icon>
    </button>
  </div>`;

  // when del is clicked, delete todo
  todoItem.querySelector('.btn-del').addEventListener('click', () => {
    todoItem.remove();
  });

  // when complete is clicked, add compelted style
  todoItem.querySelector('.btn-complete').addEventListener('click', () => {
    todoItem.classList.toggle('todo-complete');
  });

  return { todoItem };
};

export default TodoItem;
