function getTodo() 
{
  var todos_str = localStorage.getItem('todo');
  if (todos_str != null) 
  {
    todos = JSON.parse(todos_str);
  }
  return todos;
}

function addTask() 
{ 
  var task = document.getElementById('todoTask').value;
  getTodo();
  todos.push(task);
  localStorage.setItem('todo', JSON.stringify(todos));
  showTask();
  totalMsg()
  focusField();
  clearField();
  
}

function removeTask() 
{
  var id = this.getAttribute('id');
  getTodo();
  todos.splice(id, 1);
  localStorage.setItem('todo', JSON.stringify(todos));
  showTask();
  totalMsg()
}

function totalMsg(){
  getTodo();
  var completed = document.querySelectorAll('input[type="checkbox" ]:checked')
  console.log(Object.values(completed))
  var pending = todos.length-completed.length;
  if(todos.length === 1){
    return totalTodos.innerHTML =   countMessage.all +todos.length +" "+countMessage.completed+completed.length+" "+  countMessage.pending+pending ; 
  }
  else{
    return totalTodos.innerHTML = countMessage.all +todos.length +" "+countMessage.completed+completed.length+" "+  countMessage.pending+pending ;
    }
}