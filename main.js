x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var canvas_width=window.innerWidth;
var canvas_height=window.innerHeight
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}


function setup() {
  canvas=createCanvas(900,600)
}

 to_number=Number(content);

 if(Number.isInteger(to_number)){
   draw_apple="set";
 }
 else(
   document.getElementById("status").innerHTML="The speech not recognized:"
 )
function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    i="";
    if(i<= to_number){
      i="1";
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
