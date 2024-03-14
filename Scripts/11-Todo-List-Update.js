const todoList = JSON.parse(localStorage.getItem('todoList')) || [{ name: 'Make Dinner', dueDate: '03-09-2024' },
{ name: 'Wash Dishes', dueDate: '03-09-2024' }];
renderList();

function renderList() {
  let todoHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const  name = todoObject.name;
    // const dueDate  = todoObject.dueDate;

    const { name, dueDate } = todoObject;
    const HTML = `<div>${name}</div><div> ${dueDate}</div><button onclick="todoList.splice(${i}, 1);
    renderList();
    " class="delete-btn"> Delete </button>`;
    todoHTML += HTML;
  }

  document.getElementById('js-todo').innerHTML = todoHTML;
}

function addTodo() {
  const inputElement = document.getElementById('js-input');
  const name = inputElement.value;

  const dateElement = document.getElementById('js-due-date');
  const dueDate = dateElement.value;

  todoList.push({ name, dueDate });

  inputElement.value = '';
  renderList();

  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('todoList', JSON.stringify(todoList));
}