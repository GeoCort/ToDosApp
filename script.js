import Todo from "./todo.js";
const mainTitle = document.getElementById("main-title")
const addTodoElement =  document.getElementById("list-val")
const listContainer = document.getElementById("list")





// event listener for task
addTodoElement.addEventListener("keypress", (e)=>{
    if(e.key == "Enter"){
        const value = addTodoElement.value
        let todo = new Todo(listContainer,value)
    }else{
        return;
    }
    addTodoElement.value = ""
})

