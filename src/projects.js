

const content1 = document.querySelector("#content1");
const form1 = document.getElementById("#form1");

let projectList = [];

class project{
    constructor (projectName, projectDesc){
        this.projectName = projectName;
        this.projectDesc = projectDesc;
    }
    pushp(){
        projectList.push(this);
    }
}

export function createProject(){
const pName = document.querySelector("#task1").value;
const pDesc = document.querySelector("#desc1").value;

const newProject = new project(pName, pDesc)
newProject.pushp();
content1.style.display = "none";
projectList.forEach(item =>{
    console.log(item["projectDesc"]);
    

})


}

export function openForm(){
    content1.style.display = "flex";
}
export function cancelForm(){
    content1.style.display = "none";
}

const contentDisplay = document.getElementById("contentDisplay1");

export function projectProjects(){

    createNewDivs();
    
}





// ------------------------------------------------------------------


const content2 = document.getElementById("content2");
export function openTodo(){
    content2.style.display = "flex";
    
}

export function cancelTodo(){
    content2.style.display = "none";

}

function getTodo(task, date){
    this.task = task;
    this.date = date;

    
}





function createNewDivs(){

    const division2 = document.getElementById("division2");

    contentDisplay.textContent = "";

    projectList.forEach(item =>{

        const newDiv = document.createElement("button");
        newDiv.classList.add("projectOutline");
        newDiv.addEventListener("click", function(){

            division2.textContent = "";
            division2.appendChild(newMainDiv);

        })

        newDiv.textContent = `${item["projectName"]}`;
        contentDisplay.appendChild(newDiv);

        const newMainDiv = document.createElement("div");
        newMainDiv.classList.add("newMainDiv");

        const div2cont = document.createElement("div")
            div2cont.classList.add("div2cont");
            newMainDiv.appendChild(div2cont);

        const title2Cont = document.createElement("div");
            title2Cont.classList.add("title2Cont");
            div2cont.appendChild(title2Cont);

        const title2 = document.createElement("div");
            title2.classList.add("title2");
            title2Cont.appendChild(title2);
        
        const TASK = document.createElement("div");
            TASK.textContent = `${item["projectName"]}`;
            title2.appendChild(TASK);


        const desc2 = document.createElement("div");
            desc2.classList.add("desc2");
            title2Cont.appendChild(desc2);

        const DESC = document.createElement("div");
            DESC.textContent = `${item["projectDesc"]}`
            desc2.appendChild(DESC);

        const createTodoButton = document.createElement("button");
        createTodoButton.textContent = "fdsifamoim";
            createTodoButton.classList.add("createTodo");
            div2cont.appendChild(createTodoButton);

        //onclick do:
        createTodoButton.addEventListener("click", function(){
            createTodos();
        })

            function createTodos(){
                    
                const todoDisplay = document.createElement("div");
                    todoDisplay.classList.add("todoDisplay");
                    newMainDiv.appendChild(todoDisplay);
            
                const taskDiv = document.createElement("div");
                    taskDiv.classList.add("taskDiv");
                    todoDisplay.appendChild(taskDiv);
            
                const taskTitle = document.createElement("div");
                    taskTitle.textContent = "task example"
                    taskDiv.appendChild(taskTitle);
            
                const taskDesc = document.createElement("div");
                    taskDesc.textContent = "task Desc"
                    taskDiv.appendChild(taskDesc);
            
            }

    })
}

function createTodos(){
    const newMainDiv = document.querySelector(".newMainDiv");
        


    const todoDisplay = document.createElement("div");
        todoDisplay.classList.add("todoDisplay");
        newMainDiv.appendChild(todoDisplay);

    const taskDiv = document.createElement("div");
        taskDiv.classList.add("taskDiv");
        todoDisplay.appendChild(taskDiv);

    const taskTitle = document.createElement("div");
        taskTitle.textContent = "task example"
        taskDiv.appendChild(taskTitle);

    const taskDesc = document.createElement("div");
        taskDesc.textContent = "task Desc"
        taskDiv.appendChild(taskDesc);

}

