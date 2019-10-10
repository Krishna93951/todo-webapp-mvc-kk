var todos = getTodoFromLocal();
var todoSession = getTodoFromSession();

//Local Storage
function getTodoFromLocal() 
{
  return JSON.parse(localStorage.getItem('todo')) || [];
}

function setTodoToLocal(){
  localStorage.setItem('todo', JSON.stringify(todos));
}

//Seesion Storage
function getTodoFromSession() 
{
  return JSON.parse(sessionStorage.getItem('todosession')) || [];
}

function setTodoToSession(){
  sessionStorage.setItem('todosession', JSON.stringify(todoSession));
}
