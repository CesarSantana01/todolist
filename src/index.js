
import "./style.css"
require("./style.css");

import {openForm,createProject,cancelForm, projectProjects,openTodo, cancelTodo, createTodo} from "./projects";


const submit1 = document.getElementById("submit1"); //gets submit button from html
submit1.onclick = function(){createProject(); projectProjects();}

const createProject1 = document.getElementById("createProject");
createProject1.onclick = function(){openForm();}

const cancel1 = document.getElementById("cancel1");
cancel1.onclick = function(){cancelForm();}


// -------------------------------------------------------







