var todoList=document.getElementById('todoList');
var countMessage = {
  all: "All Tasks:",
  completed: "/Number of Completed Tasks:",
  pending: "/Number of Pending Tasks: ",
  empty:"No Tasks Available",
  noneCompleted:"None of the Tasks are Completed",
  nonePending:"None of the Tasks are Pending",
};
var taskList = document.getElementById("todoList");

function totalMsgL(checkedboxs,pending){
    return totalTodos.innerHTML =   countMessage.all +todos.length +" "+countMessage.completed+checkedboxs.length+" "+  countMessage.pending+pending ; 
}

function showTaskOfLocal(i) 
{
  var html = document.createElement('LI');
  var task = document.createTextNode(i);
  var x = html.appendChild(task);
  eventsOfLocalStorage();
  append(html);
}

function append(x)
{
  todoList.appendChild(x);
}

function showTaskOfSession() 
{ 
  getTodoFromSession();
  var html = '<ul id="ul">';
    for (var i = 0; i < todoSession.length; i++)
    { 
      html += '<li id="LI">'+'<input type=checkbox value="1" id ="'+ i +'" class="checkbox">'+'  '+'<lable class="strikeThis">'+todoSession[i] +'</label>'+'  '+'<button class="remove" id="' + i + '">Del</button></li>';
    };
    html += '</ul>';
    taskList.innerHTML = html;
    eventsOfSessionStorage(); 
}

function totalMsgS(checkedboxs,pending){
  return totalTodos.innerHTML =   countMessage.all +todoSession.length +" "+countMessage.completed+checkedboxs.length+" "+  countMessage.pending+pending ; 
}
