var totalTodos = document.getElementById('allTask');
var task = document.getElementById('todoTask');
var buttons = document.getElementsByClassName('remove');
var addBtn= document.getElementById('addBtn');
var checkbox= document.getElementsByClassName("checkbox");
var checkboxValues = [];
var storage= document.getElementById('store');
var itemIndex;

function init()
{ 
  eventsOfLocalStorage();
  // eventsOfSessionStorage();
  storage.addEventListener("change",toChooseStorageAPI)
}

// function addTaskToSelectedStorage(){
//   if(storage.value === "LOCAL"){
//     addTaskToLocalStorage();
//   }
//   else if (storage.value === "SESSION"){
//     addTaskToSessionStorage();
//   }
// }


function addTaskToLocalStorage() 
{ 
  if(task.value === ""){
    alert("Please enter valid Task");
  }
  else{
  todos.push(task.value);
  setTodoToLocal();
  showTaskOfLocal(task.value)
  eventsOfLocalStorage();
  }
}

// function addTaskToSessionStorage() 
// { 
//   if(task.value === ""){
//     alert("Please enter valid Task");
//   }
//   else{
//   todoSession.push(task.value);
//   console.log(todoSession);
//   setTodoToLocal();
//   showTaskOfLocal(task.value)
//   eventsOfSessionStorage();
//   }
// }

function append(item)
{
  todoList.appendChild(item);
}

function clearField() 
{
  task.value = "";
}

function focusField() 
{
  task.focus();
}

function eventsOfLocalStorage() 
{  
  addBtn.addEventListener('click',addTaskToLocalStorage);

  for (var i = 0; i <buttons.length; i++) {
    checkbox[i].addEventListener("click",checkedboxCountOfLocalTodo);
    buttons[i].addEventListener("click",del)
    buttons[i].addEventListener("click",checkedboxCountOfLocalTodo);
  }
}

// function eventsOfSessionStorage() 
// {  
//   addBtn.addEventListener('click',addTaskToSessionStorage);

//   for (var i = 0; i <buttons.length; i++) {
//     checkbox[i].addEventListener("click",checkedboxCountOfSessionTodo);
//     buttons[i].addEventListener("click",del1)
//     buttons[i].addEventListener("click",checkedboxCountOfSessionTodo);
//   }
// }

function del(){
  
  var div = this.parentElement;   
  removeTaskOfLocalStoare(div.textContent);
  div.remove();
};
// function del1(){
  
//   var div = this.parentElement;   
//   removeTaskOfSessionStoare(div.textContent);
//   div.remove();
// };

function removeTaskOfLocalStoare(deletedText){
  itemDeleted = deletedText.substr(0,deletedText.length-3);
  itemIndex = todos.indexOf(itemDeleted);
  todos.splice(itemIndex,1);
  setTodoToLocal();
}

// function removeTaskOfSessionStoare(deletedText){
//   itemDeleted = deletedText.substr(0,deletedText.length-3);
//   itemIndex = todoSession.indexOf(itemDeleted);
//   todoSession.splice(itemIndex,1);
//   setTodoToSession();
// }

function checkedboxCountOfLocalTodo(){
  var checkboxValues = [];
  var checkbox= document.getElementsByClassName("checkbox");
  for(var i = 0; i < checkbox.length; i++) {
    checkboxValues.push(checkbox[i].checked ? checkbox[i].checked = true:checkbox[i].checked = false);
        }
         var checkedboxs = checkboxValues.filter(function (e){
          return e === true;
        })
        var pending = todos.length - checkedboxs.length
        totalMsgL(checkedboxs,pending);    
}

// function checkedboxCountOfSessionTodo(){
//   var checkboxValues = [];
//   var checkbox= document.getElementsByClassName("checkbox");
//   for(var i = 0; i < checkbox.length; i++) {
//     checkboxValues.push(checkbox[i].checked ? checkbox[i].checked = true:checkbox[i].checked = false);
//         }
//          var checkedboxs = checkboxValues.filter(function (e){
//           return e === true;
//         })
//         var pending = todoSession.length - checkedboxs.length
//         totalMsgL(checkedboxs,pending);    
// }

function toChooseStorageAPI() { 
  var type=storage.value;
  console.log(type)
  if(type === "LOCAL"){
    display();
    setTodoToLocal();
    eventsOfLocalStorage();
  }
  else{
     displayS();
     setTodoToSession();
     eventsOfSessionStorage();
  }  
}

function display(){
  getTodoFromLocal();
  for(var i=0;i<todos.length;i++)
  { 
    showTaskOfLocal(todos[i]);
  }
}

// function displayS(){
//   getTodoFromSession();
//   for(var i=0;i<todoSession.length;i++)
//   { 
//     showTaskOfLocal(todos[i]);
//   }
// }
init();