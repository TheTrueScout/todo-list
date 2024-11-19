const textInput = document.querySelector('.text-input');
const dateInput = document.querySelector('.date-input');
const addButton = document.querySelector('.add-todo__button');
const deleteButton = document.querySelector('.delete-todo__button');
const textAddedArea = document.querySelector('.added-todo-text')

const todoList = JSON.parse(localStorage.getItem('todoList'));

displayTodo();

function displayTodo() {
  let todoListHtml = ''

  for (let i = 0; i < todoList.length; i++) {
    const object = todoList[i];
    const { name, date} = object


    html = `
      <div>${name}</div>
      <div>${date}</div>
      <button onclick="todoList.splice(${i}, 1); displayTodo(); " class="delete-todo__button">Delete</button>
    `

    todoListHtml += html
  }

  textAddedArea.innerHTML = todoListHtml;

  localStorage.setItem('todoList', JSON.stringify(todoList))
}


function addTodo() {

    const name = textInput.value;
    const date = dateInput.value;

    if (!name) {
      textInput.parentElement.classList.add('error')
      return;
    }

    if (name != '') {
      textInput.parentElement.classList.remove('error')
    }

    todoList.push({name, date})

    displayTodo();

    textInput.value = '';
    dateInput.value = '';

    localStorage.setItem('todoList', JSON.stringify(todoList))
  };
