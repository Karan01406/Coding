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
      
      else if(question === "Bhavya23"){
      answer = "https://www.canva.com/design/DAESiBBehBc/QLww56t4rVL4EbJR3_5G8A/watch?utm_content=DAESiBBehBc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink";
      }
      
      else if(question === "FEBruary19"){
       answer = "https://www.canva.com/design/DAESnpry2yA/epBMfYELPtdkgQ0MoD8PYg/watch?utm_content=DAESnpry2yA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink";   
      }
      else if(question === "yaar"){
       answer = "https://www.canva.com/design/DAES_wr5VvM/p5tMsBLReGqkMdFJ4fmKyQ/watch?utm_content=DAES_wr5VvM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
      }
    return answer;
}
