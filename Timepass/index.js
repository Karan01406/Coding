function createChat() {
    var new_message = document.getElementById("inputbox").value;
    var bot_message = getReply(new_message);
    var createA = document.createElement("a");
    var createAText = document.createTextNode(bot_message);
    createA.setAttribute("href", bot_message);
    createA.appendChild(createAText);
    document.getElementById("chatarea").appendChild(createA);

    if(inputbox.value === ""){
      return;
    }
    inputbox.value = "";
    
  }

  

  function getReply(question) {
    var answer = "Enter the correct code..";

    if (question === "KS014") {
      answer =
        "https://www.canva.com/design/DAESeAPgcvY/7b9Vy0Ww16lx-BAR0YDsng/watch?utm_content=DAESeAPgcvY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink";
    }
    return answer;
}