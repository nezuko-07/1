var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("text"); 

function start()
{
    document.getElementById("text").innerHTML = ""
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 
 var content = event.results[0][0].transcript;
 console.log(content);
 document.getElementById("text").innerHTML = content;//
 console.log(content);
 speak(); 
}
function speak(){
    var synth = window.speechSynthesis;//almacenamos en la variable la api que nos va a convertir la voz en texto
    speakdata = document.getElementById("text").value;//obtenemos el valor del tetxo y lo almacenamos en una nueva variable
    var utterthis = new SpeechSynthesisUtterance(speakdata);//en la variable almacenamos el texto convertido a voz atraves de la funcion de la api
    synth.speak(utterthis);//convierte el texto a voz lo almacenamos dentro de una variable para pasarlo a la funcion speak de la api
Webcam.attach(camera);
}

 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});
