const ballSize = 200;

let posX = (Math.random() * (window.innerWidth - ballSize)).toFixed();
let posY = (Math.random() * (window.innerHeight - ballSize)).toFixed();

function Ball() { 
  let newBall=document.createElement("div");
 
  newBall.style.border = "4px solid green";
  newBall.style.borderRadius = "50%";
  newBall.style.width = "200px";
  newBall.style.height = "200px";
  newBall.innerText = 1;
  newBall.style.color = "black";
  newBall.style.fontSize = "3rem";
  newBall.style.display = "inline-flex";
  newBall.style.alignItems ="center";
  newBall.style.justifyContent = "center";
  newBall.style.position = "absolute";
  newBall.style.left = posX +"px"
  newBall.style.top = posY +"px"
  newBall.style.transition = ".5s";
  
  document.body.appendChild(newBall);

  newBall.setAttribute("class","myball");
 }

 Ball();

  let myBall = document.querySelector(".myball");
  
  myBall.addEventListener("click", NewPosition);
  myBall.addEventListener("touchend", NewPosition);
    
  var audioB = new Audio("beep.mp3");
  var audioC = new Audio("coin.mp3");

 function NewPosition() {
  audioB.play();
  let posX = (Math.random() * (window.innerWidth - ballSize)).toFixed();
  let posY = (Math.random() * (window.innerHeight - ballSize)).toFixed();

    myBall.style.left = posX +"px";
    myBall.style.top = posY +"px";
    myBall.innerHTML ++;
    if((myBall.innerHTML % 5) == 0){
      audioC.play();
    } 
 }
