 
function allTaskCount() 
{
  getTodo();
  if (todos.length != 0) 
  {
    alert(alertMessage.all + todos.length());
  }
  else 
  {
    alert(alertMessage.empty);
  }
}

//function for completed tasks
function completedTaskCount() 
{
  var completed = document.querySelectorAll('input[type="checkbox" ]:checked')
  console.log(Object.values(completed));
  //console.log(Object.entries(completed));
  if (completed.length != 0)
  {
    alert(alertMessage.completed + ' ' + completed.length);
  }
  else
  {
    alert(alertMessage.noneCompleted);
  }
}

//function for pending tasks
function pendingTaskCount() 
{ 
  var completed = document.querySelectorAll('input[type="checkbox" ]:checked')
  getTodo();
  var pending = todos.length - completed.length;
  //console.log(pending)
  if(pending != 0)
  {
    alert(alertMessage.pending + ' ' + pending);
  }
  else
  {
    alert(alertMessage.nonePending);
  }
}

//clearing the text field
function clearField() 
{
  document.getElementById("todoTask").value = "";
}

//focusing on the text field
function focusField() 
{
  document.getElementById("todoTask").focus();
}

function eventToRemoveTask() 
{
  var buttons = document.getElementsByClassName('remove');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', removeTask);
  };
}

function eventsHandler() 
{
  document.getElementById('addBtn').addEventListener('click', event => 
  {
    focusField();
    addTask();
    clearField();
  });

  document.getElementById('all').addEventListener('click', event => 
  {
   allTaskCount();
  });

  document.getElementById('completed').addEventListener('click', event => 
  {
    completedTaskCount();
  });

  document.getElementById('pending').addEventListener('click', event => 
  {
    pendingTaskCount();
  });

}