export default class Todo{

    constructor(parent, input){
        this.parent = parent;
        this.ischecked = false;
        this.input =  input;
        this.generateTodo();
    }

    // returns a todo object
    generateTodo(){
        this.parent.appendChild(this.todoContainer());
    }
    // Helper function for generating DOM information 
    todoContainer(){
        let div = document.createElement("div");
        let circle =  document.createElement("div");
        circle.classList.add("checkbox")
        circle.classList.add("uncheck")
        div.addEventListener("click", ()=>{
            this.check(circle);
            console.log("clicked;")
        })
        let title = document.createElement("h3");
        div.classList.add("todo-c");
        title.innerText= `${this.input}`;
        div.appendChild(circle);
        div.appendChild(title);
        return div;
    }
    // Creates the click function for each todo object
    check(checkbox){
    if(this.ischecked == false){
        checkbox.classList.remove("uncheck");
        checkbox.classList.add("checked")
        this.ischecked = true;
    }else{
        checkbox.classList.remove("checked")
        checkbox.classList.add("uncheck")
        this.ischecked = false;
    } 
    }
    
};


