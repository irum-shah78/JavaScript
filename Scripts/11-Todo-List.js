const todoList = ['Make Dinner', 'Wash Dishes'];
renerList();

function renerList(){
let todoHTML = '';
for (let i = 0; i < todoList.length; i++) {
  const Todo = todoList[i];
  const HTML = `<p>${Todo}</p>`;
  todoHTML += HTML;
}
console.log(todoHTML);
document.getElementById('js-todo').innerHTML = todoHTML;
}

function addTodo() {
  const inputElement = document.getElementById('js-input');
  const name = inputElement.value;

  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';
  renerList();
}