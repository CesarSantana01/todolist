
const submit = document.querySelector("#submit1");
const cancel = document.querySelector("#cancel");

let projectList = [];


class project{
    constructor (projectName, projectDesc){
        this.projectName = projectName;
        this.projectDesc = projectDesc;
    }
    pushp(){
        projectList.push(this);
    }
    log(){
        for(let obj of projectList){
            console.log(obj);
            console.log(projectList)
        }
        
    }
}
export function createProject(){
const pName = document.querySelector("#task1").value;
const pDesc = document.querySelector("#desc1").value;

const newProject = new project(pName, pDesc)
newProject.pushp();
newProject.log();
}