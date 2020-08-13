const TodoItemInfo = (title) => {
  const todoInfo = document.createElement('div');
  todoInfo.classList.add('todo-info');

  todoInfo.innerHTML = `
    <h2 class="title-m">The Item Info</h2>
    <textarea
      class="title-s"
      placeholder="Description..."
      name="description"
      id="description"
      cols="30"
      rows="6"
    ></textarea>
    <div class="buttons">
      <button class="btn btn2">
        <ion-icon class="icon-s" name="checkmark"></ion-icon>
      </button>
      <button class="btn btn2 btn-del">
        <ion-icon class="icon-s" name="trash-outline"></ion-icon>
    </button>
  `;

  todosInfo.innerHTML;
};
