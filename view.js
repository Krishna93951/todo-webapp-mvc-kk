
function showTask(i,taskName) 
{ 
  var html;
  return html += '<input type="checkbox" id="'+ i +'" name="check">'+' '+taskName +'  '+'<button class="remove" id="' + i + '">Del</button>';
  document.getElementById('todoList').innerHTML = html;
  eventToRemoveTask();
  totalMsg();
}

// function totalMsg(){
//   getTodo();
//   var completed = document.querySelectorAll('input[type="checkbox" ]:checked')
//   console.log(Object.values(completed))
//   var pending = todos.length-completed.length;
//   if(todos.length === 1){
//     return totalTodos.innerHTML =   countMessage.all +todos.length +" "+countMessage.completed+completed.length+" "+  countMessage.pending+pending ; 
//   }
//   else{
//     return totalTodos.innerHTML = countMessage.all +todos.length +" "+countMessage.completed+completed.length+" "+  countMessage.pending+pending ;
//     }
// }