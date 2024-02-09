import Todo from "./todo.js";
let listContainer = document.getElementById("list")
const inputVal = document.getElementById("list-val");
inputVal.classList.add("test");

let defaultList = [] // intially empty

inputVal.addEventListener("keyup",(e)=>{
    if(inputVal.value == "") return;
    if(e.key == "Enter"){
        console.log("working")
        let todo = new Todo(listContainer, inputVal.value)
        console.log("object creation successful" , todo)
        defaultList.push(todo);
        inputVal.value = "";
    }
} )

