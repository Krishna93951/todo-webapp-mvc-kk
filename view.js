function showTask() 
{ 
  getTodo();
  var html = '<ul id="ul">';
  for (var i = 0; i < todos.length; i++)
  {
    html += '<li>' + '<input type="checkbox" id="' + i + '" autocomplete="on">' +' '+todos[i] +'  '+'<button class="remove" id="' + i + '">Del</button></li>';
  };
  html += '</ul>';
  document.getElementById('todoList').innerHTML = html;
  eventToRemoveTask();
}