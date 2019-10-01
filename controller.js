
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

function eventsHandler() 
{
  document.getElementById('addBtn').addEventListener('click',addTask);
} 
function eventToRemoveTask() 
{
  var buttons = document.getElementsByClassName('remove');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', removeTask);
  };
}

function addElement(i,taskName){
  var html = '<li>';
  for(var i=0; i<todos.length;i++){
    showTask(i,taskName);
  }
 html += '</li>'
}

function init()
{
  showTask();
  eventsHandler();
  totalMsg();
}
init();