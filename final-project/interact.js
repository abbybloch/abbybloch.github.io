
//Setting up greeting
let today = new Date(); 
console.log(Date.now()); 
let hour = today.getHours(); 
console.log(hour);
let greeting; 
let paragraph = document.getElementById('greeting'); 
if (hour >= 18) {
  greeting = 'Good evening!';
} else if (hour >= 12) {
  greeting = 'Good afternoon!';
} else if (hour >= 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Hello!';
}

paragraph.textContent = greeting;


//Buttons controlling music play/pause
var but1 = document.getElementById('btn1');
var but2 = document.getElementById('btn2');
var but3 = document.getElementById('btn3');
var but4 = document.getElementById('btn4');
but1.style.backgroundColor = 'green';
but2.style.backgroundColor = 'green';
but3.style.backgroundColor = 'green';
but4.style.backgroundColor = 'green';

function play1(){
  var audio = document.getElementById('a1');
  var btn = document.getElementById('btn1');
  if (audio.paused){
    audio.play()
    btn.style.backgroundColor = 'green';
  } else{
    audio.pause();
    audio.currentTime = 0;
    btn.style.backgroundColor = 'red';
  }
}
function play2(){
  var audio = document.getElementById('a2');
  var btn = document.getElementById('btn2');
  if (audio.paused){
    audio.play()
    btn.style.backgroundColor = 'green';
  } else{
    audio.pause();
    audio.currentTime = 0;
    btn.style.backgroundColor = 'red';
  }
}
function play3(){
  var audio = document.getElementById('a3');
  var btn = document.getElementById('btn3');
  if (audio.paused){
    audio.play()
    btn.style.backgroundColor = 'green';
  } else{
    audio.pause();
    audio.currentTime = 0;
    btn.style.backgroundColor = 'red';
  }
}
function play4(){
  var audio = document.getElementById('a4');
  var btn = document.getElementById('btn4');
  if (audio.paused){
    audio.play()
    btn.style.backgroundColor = 'green';
  } else{
    audio.pause();
    audio.currentTime = 0;
    btn.style.backgroundColor = 'red';
  }
}
function play5(){
  var audio = document.getElementById('a5');
  var btn = document.getElementById('btn5');
  if (audio.paused){
    audio.play()
    btn.style.backgroundColor = 'green';
  } else{
    audio.pause();
    audio.currentTime = 0;
    btn.style.backgroundColor = 'red';
  }
}
function play6(){
  var audio = document.getElementById('a6');
  var btn = document.getElementById('btn6');
  if (audio.paused){
    audio.play()
    btn.style.backgroundColor = 'green';
  } else{
    audio.pause();
    audio.currentTime = 0;
    btn.style.backgroundColor = 'red';
  }
}
function play7(){
  var audio = document.getElementById('a7');
  var btn = document.getElementById('btn7');
  if (audio.paused){
    audio.play()
    btn.style.backgroundColor = 'green';
  } else{
    audio.pause();
    audio.currentTime = 0;
    btn.style.backgroundColor = 'red';
  }
}

