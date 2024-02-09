export default class Todo{

    constructor(parent, input){
        this.parent = parent;
        ischecked = false;
        this.input =  input;
        this.generateTodo();
    }

    // abstracts todo list object creation puts todo object on dom
    generateTodo( ){
        this.parent.appendChild(this.todoContainer());
    }
    // returns a todo list object for the dom
    todoContainer(){
        let div = document.createElement("div");
        let title = document.createElement("h2");
        let description = document.createElement("p");
        title.innerText= `${this.input}`;
        div.appendChild(title);
        return div;
    }

};


