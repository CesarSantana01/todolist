const submit = document.querySelector("#submit1");

import "./style.css"
require("./style.css");

import { createProject } from "./projects";

// consoleit();



submit.addEventListener("click", function(){
    createProject();
})

