function getTodo() 
{
  var todos_str = localStorage.getItem('todo');
  todos = JSON.parse(todos_str);
  return todos;
}

function setTodo()
{
  localStorage.setItem('todo', JSON.stringify(todos));
}

function addTask() 
{
  var task = document.getElementById('todoTask').value;
  getTodo();
  todos.push(task);
  localStorage.setItem('todo', JSON.stringify(todos));
  showTask();
}

function removeTask() 
{
  var id = this.getAttribute('id');
  getTodo();
  todos.splice(id, 1);
  localStorage.setItem('todo', JSON.stringify(todos));
  showTask();
}