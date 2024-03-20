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
        let li = document.createElement("li")
        let div = document.createElement("div")
        let circle =  document.createElement("input")
        circle.setAttribute("type","checkbox")
        circle.setAttribute("name","todo")
        let label =  document.createElement("label")
        label.innerText =`${this.input}`
        label.setAttribute("name","todo")
        label.addEventListener("click",()=>{
            circle.checked = (circle.checked == true? false:true)            
        })
        div.appendChild(circle)
        div.appendChild(label)
        li.appendChild(div)
        
        return div;
    }

    
};


