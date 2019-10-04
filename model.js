var todos = [];
var todoSession = [];
var todos_str,todos_strSession;

//Local Storage
function getTodoFromLocal() 
{
  todos = JSON.parse(localStorage.getItem('todo')) || [];
  return todos;
}

function setTodoToLocal(){
  localStorage.setItem('todo', JSON.stringify(todos));
}

//Seesion Storage
function getTodoFromSession() 
{
  todoSession = JSON.parse(sessionStorage.getItem('todosession')) || [];
  return todoSession ;
}

function setTodoToSession(){
  sessionStorage.setItem('todosession', JSON.stringify(todoSession));
}
