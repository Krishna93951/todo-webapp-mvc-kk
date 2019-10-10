var todoList=document.getElementById('todoList');
var countMessage = {
  all: "All Tasks:",
  completed: "/Number of Completed Tasks:",
  pending: "/Number of Pending Tasks: ",
  empty:"No Tasks Available",
  noneCompleted:"None of the Tasks are Completed",
  nonePending:"None of the Tasks are Pending",
};

function totalMsgL(checkedboxs,pending){
    return totalTodos.innerHTML =   countMessage.all +todos.length +" "+countMessage.completed+checkedboxs.length+" "+  countMessage.pending+pending ; 
}

function showTaskOfLocal(i) 
{
  var check = document.createElement('INPUT');
  check.setAttribute('type','checkbox');
  check.setAttribute('class','checkbox');
  var li = document.createElement('LI');
  li.setAttribute('id','list');
  li.appendChild(check);
  var task1 = document.createTextNode(i);
  li.appendChild(task1);
  var deletebutton = document.createElement('BUTTON')
  deletebutton.innerHTML = "Del"
  li.appendChild(deletebutton);
  deletebutton.setAttribute('class','remove')
  eventsOfLocalStorage();
  append(li);
}

// function showTaskOfSession() 
// { 
//   getTodoFromSession();
//   var html = '<ul id="ul">';
//     for (var i = 0; i < todoSession.length; i++)
//     { 
//       html += '<li id="LI">'+'<input type=checkbox value="1" id ="'+ i +'" class="checkbox">'+'  '+'<lable class="strikeThis">'+todoSession[i] +'</label>'+'  '+'<button class="remove" id="' + i + '">Del</button></li>';
//     };
//     html += '</ul>';
//     taskList.innerHTML = html;
//     eventsOfSessionStorage(); 
// }

// function totalMsgS(checkedboxs,pending){
//   return totalTodos.innerHTML =   countMessage.all +todoSession.length +" "+countMessage.completed+checkedboxs.length+" "+  countMessage.pending+pending ; 
// }
