var todoArray = [];
var input = document.querySelector("#todo");
var list = document.querySelector("#ol");


// Adding todo to array
function addTodo(){
    
    todoArray.push(input.value);
    console.log(todoArray);       
    displayTodo();
    input.value="";
}

// To render Todo
function displayTodo(){
    list.innerHTML="";
    for(var i=0 ; i<todoArray.length ; i++){
      
        
        list.innerHTML += `<li id="li">${todoArray[i]}</li>
        <button onclick="EditTodo(${i})">Edit</button>
        <button onclick="DeleteTodo(${i})">Delete</button>`
}

}

function EditTodo(index){
    var editedValue = prompt("Enter Edited Value");
    // list.innerHTML+='<input type="text" name="" id="" placeholder="Edit To-Do"> <button>Confirm </button>';
    // var editedValue = list.value;
    // for (var i=1; i<=1; i++){
    // p = document.createElement("p");
    //     p.innerHTML =  `.<input type="text" name="" id="editedValue" placeholder="Edit To-Do"> ;`;
    //     list.appendChild(p);
    // var editedValue = document.querySelector("#editeValue")
    //   console.log(editedValue);
    //   function SpliceArray(){
    // todoArray.splice(index , 1 , editedValue);
    //   }
    //   p.innerHTML=`<button onclick="SpliceArray(${i})">Confirm</button>`;
    // }
    // console.log(editedValue);
    
    todoArray.splice(index , 1 , editedValue);
    displayTodo();
    console.log(todoArray);

}


function DeleteTodo(index){
    todoArray.splice(index, 1)
    displayTodo();
    // console.log(todoArray);

}