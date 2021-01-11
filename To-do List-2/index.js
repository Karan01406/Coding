const list = document.getElementById("list");
const addItem = document.getElementById("addItem");
const btnAddItem = document.getElementById("btnAddItem");

btnAddItem.addEventListener("click", addItemToArray)

let item = JSON.parse(localStorage.getItem("itemlist"));
if (item === null ){
    item = [];
}
printItem();

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
    localStorage.setItem("itemlist", JSON.stringify(item));
    list.innerHTML = "";
    for(let i = 0; i <item.length; i++){
        addItemToList(item[i], i);
    }
    addItem.value = "";
}

function addItemToList(newTodo, itemId){
    const li = document.createElement("li");
    li.setAttribute("item-id", itemId);
    li.classList.add("list-group-item");

    const span = document.createElement("span");
    span.innerText = newTodo.task;
    span.className = "col-2";

     const checkbox = document.createElement("input");
     document.getElementById("checkbox");
     checkbox.setAttribute('type','checkbox');
     checkbox.className = "col-1";
     checkbox.onchange = appendCheckbox;

     const dltIcon = document.createElement("i");
     dltIcon.className = 'fa fa-minus-circle';
     const dltBtn = document.createElement('button');
     dltBtn.className = "btn btn-danger col-1";
     dltBtn.appendChild(dltIcon);
     dltBtn.onclick = deleteItem;

     const upIcon = document.createElement("i");
     upIcon.className = 'fa fa-chevron-up';
     const upBtn = document.createElement('button');
     upBtn.className = " btn btn-light ";
     upBtn.appendChild(upIcon);
     upBtn.onclick = moveUp;

     const downIcon = document.createElement("i");
     downIcon.className = 'fa fa-chevron-down';
     const downBtn = document.createElement('button');
     downBtn.className = "btn btn-light ";
     downBtn.appendChild(downIcon);
     downBtn.onclick = moveDown;

    if (newTodo.done){
        checkbox.setAttribute("checked", true);
       span.style.textDecoration = "line-through";
        span.style.color = "green";
    }
 
    li .appendChild(checkbox); 
    li.appendChild(span);
    li.appendChild(dltBtn);
    if (itemId !== 0){
        li.appendChild(upBtn);
    }
    if (itemId !== item.length - 1){
        li.appendChild(downBtn);
    }
    list.appendChild(li);   
}


function appendCheckbox(event) {
    const index = parseInt(event.target.parentElement.getAttribute('item-id'));
    console.log(item);
    console.log(index);
    item[index].done = !item[index].done;
    printItem();
}

function deleteItem(event) {
    let deleteIndex = parseInt(event.target.parentElement.getAttribute('item-id'));
    if(Number.isNaN(deleteIndex)){
        deleteIndex = parseInt(event.target.parentElement.parentElement.getAttribute("item-id"));
    }
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
    let upIndex = parseInt(event.target.parentElement.getAttribute('item-id'));
    if(Number.isNaN(upIndex)){
        upIndex = parseInt(event.target.parentElement.parentElement.getAttribute("item-id"));
    }
    if(upIndex !== 0){
    swap(upIndex, upIndex - 1);
    printItem();
  }
}

function moveDown(event){
    let downIndex = parseInt(event.target.parentElement.getAttribute('item-id'));
    if(Number.isNaN(downIndex)){
        downIndex = parseInt(event.target.parentElement.parentElement.getAttribute("item-id"));
    }
    if(downIndex !== item.length - 1){
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
