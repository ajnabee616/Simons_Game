

var randomChosenColour= [];
var userInput=[];
let buttonColor=["green","red","yellow","blue"];
var gameState="started";
var level=1;





$(document).keypress(function keyPressed (event) { 
    if(gameState=="started" ||gameState=="game_over"){
        gameState="showing";
      randomColor();
      $("h1").text("Level 1");
    }   
});


 $(".btn").click(function buttonClicked(){
    if(gameState=="user"){
       userInput.push(this.id);
       levelCheck() ;
       addAnimation(this.id);
      }
      
});
     

//random chosing of the color 
function randomColor(){
   if( gameState=="showing"){
   var color= Math.floor(Math.random()*4);
   addAnimation(buttonColor[color]);
   randomChosenColour.push(buttonColor[color]);
    gameState = "user";
   } 
}


//adding animation to the color chosen
function addAnimation(buttonPressed){ 
    $("#"+buttonPressed).addClass("pressed");
    setTimeout(()=>{
        $("#"+buttonPressed).removeClass("pressed");
    },100);   
    addSound(buttonPressed);
}

//adding sound to the chosen color
function addSound(sound){
    switch(sound){
        case "red":
            new Audio("./red.mp3").play();
            break;
        case "blue":
            new Audio("./blue.mp3").play();
            break;
        case "green":
            new Audio("./green.mp3").play();
            break;
        case "yellow":
            new Audio("./yellow.mp3").play();
            break;  
        default:
            new Audio("./wrong.mp3").play();              
    }
}

//progressing to further levels
function levelCheck(){
   if(randomChosenColour[userInput.length-1]==userInput[userInput.length-1]){
    if(userInput.length<randomChosenColour.length){
        gameState="user";
    }
    else{
        userInput = []; 
        gameState="showing";
        setTimeout(()=>{
            randomColor();
        },500);
        
        level++;
        $("h1").text("Level "+level);
    }
   }
   else
    startOver();
}      

//re-starting the game
function startOver(){
    gameState="game_over";
      $("h1").text("Game over, Press any key to Restart");
      randomChosenColour = [];
      userInput = []; 
      level =1;
      
}



 

