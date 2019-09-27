// Import stylesheets
import './style.css';
import  {show} from './view.js'
// Write Javascript code!
var heading = document.getElementById('body');
var input =document.getElementById('input');
heading.insertAdjacentHTML('beforeBegin',`<h1>My To-Do List</h1>`);
input.innerHTML=`<input></input>`;