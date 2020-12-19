var list = document.getElementById("list");
var button = document.getElementById("button");
var input = document.getElementById("input");
var buttonA = document.getElementById("buttonA");

button.addEventListener("click", function(){
    var item = document.createElement("p");
    item.classList.add("item");
    item.innerText = input.value;
    list.appendChild(item);
    input.value = "";
    
    item.addEventListener("click", function(){
        item.style.Color = "green";
    })

    buttonA.addEventListener("click", function(){
       list.removeChild(item);
    })
})
