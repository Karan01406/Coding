const list = document.getElementById("list");
const addItem = document.getElementById("addItem");
const btnAddItem = document.getElementById("btnAddItem");

btnAddItem.addEventListener("click", addItemToArray)

let item = [];
console.log(item);
function addItemToArray(){
    if(addItem.value === ""){
        return;
    }
    

   let newItem = {
    task: addItem.value,
    done: false
   };

    item.push(newItem);
    printItem();
}

function printItem(){
    list.innerHTML = "";
    for(let i = 0; i <item.length; i++){
        addItemToList(item[i]);
    }
    addItem.value = "";
}

function addItemToList(newTodo, itemId){
    const li = document.createElement("li");
    li.setAttribute("item-id", itemId);
    const span = document.createElement("span");
    span.innerText = newTodo.task;

     const checkbox = document.createElement("input");
     checkbox.setAttribute('type','checkbox');
     checkbox.onclick = appendCheckbox;

    const dltBtn = document.createElement('button');
    dltBtn.innerText = 'X';
    dltBtn.onclick = deleteItem;

    const upBtn = document.createElement('button');
    upBtn.innerText = "^";
    upBtn.onclick = moveUp;

    const downBtn = document.createElement('button');
    downBtn.innerText = "v";
    downBtn.onclick = moveDown;

    if (newTodo.done){
        checkbox.setAttribute("checked", true);
       span.style.textDecoration = "line-through";
        span.style.color = "green";
    }
 
    li.appendChild(span);
    li .appendChild(checkbox);
    li.appendChild(dltBtn);
    li.appendChild(upBtn);
    li.appendChild(downBtn);
    list.appendChild(li);
}


function appendCheckbox(event) {
    const index = parseInt(event.target.parentElement.getAttribute('item-id'));
    item[index].done = !item[index].done;
    printItem();
}

function deleteItem(event) {
    const deleteIndex = parseInt(event.target.parentElement.getAttribute('item-id'));
    const newItem = [];
    for(let i=0 ; i<item.length ; i++) {
        if(i !== deleteIndex) {
            newItem.push(item[i]);
        }
    }
    item = newItem;
    printItem();
}

function moveUp(event){
    const upIndex = parseInt(event.target.parentElement.getAtrribute('item-id'));

    if(index !== 0){
    swap(upIndex, upIndex - 1);
    printItem();
  }
}

function moveDown(event){
    const downIndex = parseInt(event.target.parentElement.getAtrribute('item-id'));

    if(index !== item.length){
    swap(downIndex, downIndex + 1);
    printItem();
  }
}


function swap(index1, index2){
  
    const itematIndex1 = item[index1];
    const itematIndex2 = item[index2];

    item[index1] = itematIndex2;
    item[index2] = itematIndex1; 
}
