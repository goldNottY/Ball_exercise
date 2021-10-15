const ballSize = 200;

//Random dark color
let hue = Math.floor(Math.random() * 360);   //0-360
let saturation =  Math.floor(Math.random() * 100); //0-100
let lightness =  Math.floor(Math.random() * 30); //0-100 Limited to 30. 
let color = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";

let posX = (Math.random() * (window.innerWidth - ballSize)).toFixed(); 
let posY = (Math.random() * (window.innerHeight - ballSize)).toFixed();

function Ball() { 
  let newBall=document.createElement("div");
 
  newBall.style.backgroundColor = color;
  newBall.style.borderRadius = "50%";
  newBall.style.width = "200px";
  newBall.style.height = "200px";
  newBall.style.color = "#ffffff";
  //drop shadow
  newBall.style.textShadow = "2px 5px 5px #ffffff";
  newBall.style.fontSize = "3rem";
  newBall.style.display = "inline-flex";
  newBall.style.alignItems ="center";
  newBall.style.justifyContent = "center";
  newBall.style.position = "absolute";
  //random position
  newBall.style.left = posX +"px"
  newBall.style.top = posY +"px"
  newBall.innerText = 1;
  //amination
  newBall.style.transition = ".5s";
  document.body.appendChild(newBall);
  //set a class to the div
  newBall.setAttribute("class","myball");
 }

 Ball();

  let myBall = document.querySelector(".myball");
  
  myBall.addEventListener("click", NewPosition);
  myBall.addEventListener("touchend", NewPosition);
  
  //Sound sources
  var audioB = new Audio("beep.mp3");
  var audioC = new Audio("coin.mp3");

 function NewPosition() {
   //sound effect 1
  audioB.play();
  let posX = (Math.random() * (window.innerWidth - ballSize)).toFixed();
  let posY = (Math.random() * (window.innerHeight - ballSize)).toFixed();

    myBall.style.left = posX +"px";
    myBall.style.top = posY +"px";
    myBall.innerHTML ++;
    //sound effect 2
    if((myBall.innerHTML % 5) == 0){
      audioC.play();
    } 
 }
