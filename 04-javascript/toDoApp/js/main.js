console.log("js aktif");

const form = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo");
const addToDoButton = document.querySelector("#addToDo");
const toDoList = document.querySelector("#toDoList");
const filter = document.querySelector("#filter");
const clearToDo = document.querySelector("#clear");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addToDo);
  document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
  secondCardBody.addEventListener("click", updateTodos);
  secondCardBody.addEventListener("click", removeTodo);
  clearToDo.addEventListener("click", clearAllTodos);
  filter.addEventListener("keyup", filterTodos);
}

function loadAllTodosToUI() {
  toDoList.innerHTML = "";
  let todos = getValuesFromStorage();

  todos.forEach((todo) => {
    addToDoToUI(todo);
  });
}

function addToDo(e) {
  let todos = getValuesFromStorage();
  let todosNames = todos.map((e) => e[0]);
  let newToDo = toDoInput.value.trim();
  if (newToDo != "" && !todosNames.includes(newToDo)) {
    newToDoArray = [newToDo, "uncompleted"];
    addToDoToUI(newToDoArray);
    addToDoToStorage(newToDoArray);
    showAlert("success", `${newToDo} added!`);
  } else if (!newToDo) {
    showAlert("danger", "Not Empty!");
  } else if (todosNames.includes(newToDo)) {
    showAlert("warning", "Same todo already saved!");
  }
  e.preventDefault();
}

function addToDoToUI(newToDo) {
  newToDoItem = document.createElement("li");
  newToDoItem.className = "list-group-item d-flex justify-content-between";

  if (newToDo[1] == "uncompleted") {
    newToDoItem.innerHTML = `<a href="" class="me-2 unchecked"><i class="far fa-square"></i></a>${newToDo[0]}<a href="" class="ms-auto remove-item"><i class="fas fa-trash-alt"></i></a>`;
  } else if (newToDo[1] == "completed") {
    newToDoItem.innerHTML = ` <a href="" class="me-2 complete-todo"><i class="fas fa-check-square"></i></a>${newToDo[0]}<a href="" class="ms-auto"><i class="fas fa-trash-alt"></i></a>`;
    newToDoItem.style = "text-decoration: line-through ;";
    newToDoItem.classList.add("list-group-item-success");
  }

  toDoList.appendChild(newToDoItem);
}

function getValuesFromStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

function addToDoToStorage(newToDo) {
  let todos = getValuesFromStorage();

  todos.push(newToDo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function updateTodos(e) {
  e.preventDefault();
  let todos = getValuesFromStorage();

  if (e.target.className == "fas fa-check-square") {
    // completed to uncompleted
    e.target.className = "far fa-square";
    todos.forEach((element) => {
      if (element[0] == e.target.parentElement.parentElement.innerText) {
        element[1] = "uncompleted";
      }
    });
  } else if (e.target.className == "far fa-square") {
    // uncomplete to completed
    e.target.className = "fas fa-check-square";
    todos.forEach((element) => {
      if (element[0] == e.target.parentElement.parentElement.innerText) {
        element[1] = "completed";
      }
    });
  }
  localStorage.setItem("todos", JSON.stringify(todos));
  loadAllTodosToUI();
}

function showAlert(type, message) {
  let alertBody = document.createElement("div");
  alertBody.classList = `alert alert-${type}`;
  alertBody.innerHTML = message;
  firstCardBody.appendChild(alertBody);
  setTimeout(function () {
    alertBody.remove();
  }, 2000);
}

function removeTodo(e) {
  if (e.target.className == "fas fa-trash-alt") {
    e.target.parentElement.parentElement.remove();
    console.log(e.target.parentElement.parentElement);
    removeTodoFromStorage(e.target.parentElement.parentElement.textContent);

    showAlert(
      "info",
      `${e.target.parentElement.parentElement.textContent} successfully removed!`
    );
  }
}

function removeTodoFromStorage(deletedTodo) {
  let todos = getValuesFromStorage();
  todos.forEach(function (element, index) {
    if (element[0] === deletedTodo) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
  loadAllTodosToUI();
}

function clearAllTodos(e) {
  let todos = getValuesFromStorage();
  if (confirm("All todos removed!")) {
    todos = [];
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  loadAllTodosToUI();
}

function filterTodos(e) {
  const filterValue = e.target.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");
  listItems.forEach(function (listItem) {
    const text = listItem.textContent.toLocaleLowerCase();
    if (text.indexOf(filterValue) === -1) {
      //bulamadı
      listItem.setAttribute("style", "display:none !important");
    } else {
      listItem.setAttribute("style", "display:flex !important");
    }
  });
}
