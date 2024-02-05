"strict";
let ctx;
let fishX;
let fishY;
let anchorX;
let anchorY;
let sharkX;
let sharkY;
let eatenFish = 0;
let gameReset;
let postionArray=[];

function setup(){

    gameReset = 0;

    let canvas=document.getElementById("mycanvas");
    ctx=canvas.getContext("2d");
    document.getElementById("eatenFish").innerHTML += eatenFish;
    fishCoordinates();
    sharkCoordinates();
    anchorCoordinates();

    while ((fishX == anchorX && fishY == anchorY) || (fishX == sharkX && fishY == sharkY)){
      fishCoordinates();
    }

    while ((anchorX == sharkX && anchorY == sharkY) || anchorX == fishX && anchorY == fishY){
      anchorCoordinates();
   }

   drawEverything();

}

function drawGrid(){
    ctx.save();
   let x=0;
   let y=0;
for(let i=0;i<=10;i++){
  ctx.translate(x,y);
  
    ctx.beginPath();
    ctx.lineTo(50,50);
    ctx.lineTo(50,550);
    ctx.stroke();
    x=+50;
    
  }
  ctx.restore();
  ctx.save();
  x=0;
  y=0;
  for(let j=0;j<=10;j++){
  
  ctx.translate(x,y);
  ctx.beginPath();
  ctx.lineTo(50,50);
  ctx.lineTo(550,50);
  ctx.stroke();
  y=+50;
}
ctx.restore();
}
function fishShape(a,b){
ctx.save();

    ctx.translate(a,b );
    ctx.fillStyle="blue";
    ctx.beginPath();
    ctx.lineTo(5,10);
    ctx.lineTo(15,25); 
    
    ctx.lineTo(5,35);
    ctx.lineTo(5,10);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle="yellow";
    ctx.beginPath();
    ctx.lineTo(12,10);
    ctx.lineTo(30,20);
    ctx.lineTo(30,30);
    ctx.lineTo(12,35);
    ctx.lineTo(12,10);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle="pink";
    ctx.beginPath();
    ctx.lineTo(30,20);
    ctx.lineTo(45,28);
    ctx.lineTo(30,30);
    ctx.lineTo(30,20);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle="black";
    ctx.beginPath();
    ctx.arc(40,25,1,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.restore();
}
function anchorFish(){
    ctx.save();
    ctx.translate(anchorX,anchorY);
    ctx.beginPath();
    ctx.lineWidth=5;
    ctx.lineTo(40,10);
    ctx.arc(15,35,8,6,Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(41,10,5,0,2*Math.PI);
    ctx.stroke();
    ctx.restore(); 
    
  }
function sharkKiller(u,v){
    ctx.save();
  ctx.translate(u,v)
   ctx.beginPath();
   ctx.arc(25,30,15,0,2*Math.PI);
   ctx.stroke();
   ctx.beginPath();
   ctx.arc(22,25,2,0,2*Math.PI);
   ctx.stroke();
   ctx.beginPath();
   ctx.arc(28,25,2,0,2*Math.PI);
   ctx.stroke();
   ctx.beginPath();
   ctx.arc(25,36,6.5,0,Math.PI);
   ctx.stroke();
   ctx.beginPath();
   ctx.arc(25,32,6.5,0,Math.PI);
   ctx.stroke();
   ctx.beginPath();
   ctx.arc(25,28,Math.PI,0,0);
   ctx.stroke();
   ctx.beginPath();
   ctx.lineTo(20,40);
   ctx.lineTo(22,40);
   ctx.lineTo(24,40);
   ctx.lineTo(26,40);
   ctx.lineTo(28,40);
   ctx.lineTo(30,40);
   ctx.stroke();
   ctx.beginPath();
   ctx.lineTo(20,5);
   ctx.lineTo(25,15);
   ctx.lineTo(20,15);
   ctx.lineTo(20,5);
   ctx.stroke();
   ctx.beginPath();
   ctx.arc(25,32,4,0,Math.PI,2*Math.PI);
   ctx.stroke();
   ctx.beginPath();
   ctx.lineTo(10,26);
   ctx.lineTo(2,26);
   ctx.lineTo(10,30);
   ctx.stroke();
   ctx.beginPath();
   ctx.lineTo(40,26);
   ctx.lineTo(48,26);
   ctx.lineTo(40,30);
   ctx.stroke();
   ctx.beginPath();
   ctx.lineTo(20,18);
   ctx.lineTo(25,23);
   ctx.stroke();
   ctx.beginPath();
   ctx.lineTo(25,23);
   ctx.lineTo(28,18);
   ctx.stroke();
   ctx.restore();

  }
 function eventHandler(e){
  if (gameReset == 0){
    let keyStoke=e.key;
   if(postionArray.length<5){
      if(keyStoke=="ArrowUp"){
      postionArray.push("up");
      
    }
      else if(keyStoke=="ArrowDown"){
      postionArray.push("down");
      
    }
    else if(keyStoke=="ArrowLeft"){
      postionArray.push("left");
      
    }
    else if(keyStoke=="ArrowRight"){
      postionArray.push("right");
      
    }


    if(sharkX >= 550){
      sharkX-=50;
    }
    else if(sharkX <= 0){
      sharkX+=50
    }
    else if(sharkY >= 550){
      sharkY-=50
    }
    else if(sharkY <= 0){
      sharkY+=50
    }


    drawEverything();
    
    if (sharkX == anchorX && sharkY == anchorY){
      if(keyStoke=="ArrowUp"){
        postionArray.push("up");
        
      }
      else if(keyStoke=="ArrowDown"){
        postionArray.push("down");
        
      }
      else if(keyStoke=="ArrowLeft"){
        postionArray.push("left");
        
      }
      else if(keyStoke=="ArrowRight"){
        postionArray.push("right");
        
      }

      drawEverything();
      gameOver();
    }
    
    if ((sharkY == 150 && (sharkX >= 150 && sharkX <= 400 )) || 
    (sharkY == 400 && (sharkX >= 150 && sharkX <= 400 )) ){
      if(keyStoke=="ArrowUp"){
        postionArray.push("up");
        
      }
      else if(keyStoke=="ArrowDown"){
        postionArray.push("down");
        
      }
      else if(keyStoke=="ArrowLeft"){
        postionArray.push("left");
        
      }
      else if(keyStoke=="ArrowRight"){
        postionArray.push("right");
    
      }
      drawEverything();
    }

    if (sharkX == fishX && sharkY == fishY){
      while ((fishX == anchorX && fishY == anchorY) || (fishX == sharkX && fishY == sharkY)){
        fishCoordinates();
      }
      drawEverything();
      eatenFish+=1;
      document.getElementById("eatenFish").innerHTML = "Eaten: " + eatenFish;
    }

  }
}
 }
 

function drawEverything(){
  ctx.clearRect(0,0,600,600);
  drawColor();
  drawWalls();
  drawGrid();
  fishShape(fishX,fishY);
  anchorFish();
  sharkKiller(sharkX,sharkY);
  
  document.getElementById("positionInput").value = postionArray;
}
  


function gameOver(){
  gameReset = 1;
  ctx.save;
  ctx.font = "80px Times New Roman";
  ctx.fillStyle = "red";
  ctx.fillText("GAME OVER!!!", 40, 350);
  ctx.restore
}

function fishCoordinates(){

  fishX=randomNumber();
  fishY=randomNumber();

  while ((fishY == 3 && (fishX >= 3 && fishX <= 8 )) || 
  (fishY == 8 && (fishX >= 3 && fishX <= 8 )) ){
    fishX=randomNumber();
    fishY=randomNumber();
  }

  fishX*=50;
  fishY*=50;

}

function anchorCoordinates(){

  anchorX=randomNumber();
  anchorY=randomNumber();

  while ((anchorY == 3 && (anchorX >= 3 && anchorX <= 8 )) || 
  (anchorY == 8 && (anchorX >= 3 && anchorX <= 8 )) ){
    anchorX=randomNumber();
    anchorY=randomNumber();
  }

  anchorX*=50;
  anchorY*=50;

}

function sharkCoordinates(){
  sharkX=randomNumber();
  sharkY=randomNumber();

  while ((sharkY == 3 && (sharkX >= 3 && sharkX <= 8 )) || 
  (sharkY == 8 && (sharkX >= 3 && sharkX <=8 )) ){
    sharkX=randomNumber();
    sharkY=randomNumber();
  }

  sharkX*=50;
  sharkY*=50;

}
  

function randomNumber() {
  n = Math.round(Math.random()*10);
  
  while (n == 0 || n == 10){
    n = Math.round(Math.random()*10);
  }

  return n;
}
   

function resetOnClick(){
  ctx.clearRect(0,0,600,600);
  setup();
  eatenFish = 0;
  document.getElementById("eatenFish").innerHTML = "Eaten: " + eatenFish;
}


function drawWalls(){
  ctx.beginPath();
  ctx.fillStyle="red";
  ctx.rect(150,150,300,50);
  ctx.rect(150,400,300,50);
  ctx.fill();
}
function drawColor(){
  ctx.beginPath();
  ctx.fillStyle="lightblue";
  ctx.rect(0,0,600,600);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle="lightgreen";
  ctx.rect(0,550,600,600);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle="lightgreen";
  ctx.rect(550,500,50,50);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle="lightgreen";
  ctx.rect(0,500,50,50);
  ctx.fill();
  x=-40;
  y=550;
  for(i=0;i<50;i++){
    makeMushroom(x,y)
    x+=80;
  }
  x=-40;
  y=550;
  for(i=0;i<50;i++){
    drawWaterPlant(x,y)
    x+=60;
  }
  fishShape(0,20);

  drawBubble(-3,-10);
  drawBubble(-2,-22);
  fishShape(540,15);
  drawBubble(540,-18);
  drawBubble(540,-30);
  fishShape(250,10);
  drawBubble(260,-20);
  drawBubble(270,-30)


}
function makeMushroom(mushroomX,mushroomY){
  ctx.save();
  ctx.translate(mushroomX,mushroomY);
  ctx.beginPath();
  ctx.fillStyle="beige";
  ctx.lineTo(50,50);
  ctx.lineTo(50,25);
  ctx.lineTo(40,25);
  ctx.lineTo(40,50);
  ctx.lineTo(50,50);
  ctx.stroke();
  ctx.fill();
  ctx.beginPath()
  ctx.lineTo(60,25);
  ctx.lineTo(30,25);
  ctx.stroke();
  ctx.beginPath();
  ctx.fillStyle="red";
  ctx.arc(45,25,15,Math.PI,0,0);
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle="beige";
  ctx.arc(40,15,2,0,2*Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle="beige";
  ctx.arc(50,16,2,0,2*Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle="beige";
  ctx.arc(45,20,2,0,2*Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle="beige";
  ctx.arc(55,22,2,0,2*Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle="beige";
  ctx.arc(36,20,2,0,2*Math.PI);
  ctx.fill();
  ctx.restore();
}
function drawWaterPlant(plantX,PlantY){
  ctx.save();
     ctx.translate(plantX,PlantY);
     ctx.beginPath();
     ctx.fillStyle="darkgreen"
     ctx.lineTo(50,50);
     ctx.lineTo(43,25);
     ctx.lineTo(52,45);
     ctx.lineTo(53,25);
     ctx.lineTo(56,45);
     ctx.lineTo(62,25);
     ctx.lineTo(58,50)
     ctx.stroke();
     ctx.fill();
     ctx.restore();
}
function drawBubble(bubbleX,bubbleY){
  ctx.save();
  ctx.translate(bubbleX,bubbleY);
  ctx.fillStyle="lightblue"
  ctx.beginPath();
  ctx.arc(50,50,3,0,2*Math.PI);
  ctx.stroke();
  ctx.fill();
  ctx.restore();

}

function moveNext(){

for(let i=0;i<postionArray.length;i++){
let j=postionArray[i];
    if (gameReset == 0){
      if(i<postionArray.length){
       if(j=="up"){
        sharkY-=50;
      }
        else if(j=="down"){
        
        sharkY+=50;
      }
      else if(j=="left"){
        
        sharkX-=50;
      }
      else if(j=="right"){
      
        sharkX+=50;
      }
  
  
      if(sharkX >= 550){
        sharkX-=50
      }
      else if(sharkX <= 0){
        sharkX+=50
      }
      else if(sharkY >= 550){
        sharkY-=50
      }
      else if(sharkY <= 0){
        sharkY+=50
      }
  
  
      drawEverything();
      
      if (sharkX == anchorX && sharkY == anchorY){
        drawEverything();
        gameOver();
      }
      
      if ((sharkY == 150 && (sharkX >= 150 && sharkX <= 400 )) || 
      (sharkY == 400 && (sharkX >= 150 && sharkX <= 400 )) ){
        if(j=="up"){
         
          sharkY+=50;
        }
        else if(j=="down"){
      
          sharkY-=50;
        }
        else if(j=="left"){
       
          sharkX+=50;
        }
        else if(j=="right"){
         
          sharkX-=50;
        }
        drawEverything();
      }
    
  
      if (sharkX == fishX && sharkY == fishY){
        while ((fishX == anchorX && fishY == anchorY) || (fishX == sharkX && fishY == sharkY)){
          fishCoordinates();
        }
        drawEverything();
      eatenFish+=1;
      document.getElementById("eatenFish").innerHTML = "Eaten: " + eatenFish;
      }


    }
  }
}

postionArray=[];
drawEverything();
if (sharkX == anchorX && sharkY == anchorY){
  drawEverything();

  gameOver();
}
}



   
   