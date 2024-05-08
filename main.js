

let j = document.getElementById("ho1");
let r = document.getElementById("js1");



let mar = document.getElementById("mark");

function invi() {
    mar.style.display = 'none';
}


function backn() {
  mar.style.display = 'inline';
}
setInterval(backn,750);
setInterval(invi,650);


var speed = 400;
var speed2 = 500;
var str = document.getElementById('wel');
var i = 0;
var isRemoving = false;


var messages = ['Welcome','வணக்கம்','Bienvenu','いらっしゃいませ','환영','Willkommen'];

function action() {
  if (isRemoving) {
    if (str.innerText.length > 0) {
      str.innerText = str.innerText.substr(0, str.innerHTML.length - 1);
      setTimeout( action, speed2 );
      return;
    }
    isRemoving = false;
    i++;
    if (i >= messages.length) {
      i = 0;
    }
    setTimeout( action, speed );
    return;
  }
  var message = messages[i];
  str.innerText = message.substr(0, str.innerHTML.length + 1);
  if (str.innerText.length === message.length) {
    isRemoving = true;
  }
  setTimeout( action, isRemoving ? speed2 : speed );
}

setTimeout( action, speed ) ;





j.onmouseout = function() {
    // To change the color of the element that triggered the event (in this case, 'j')
    r.style.display = 'none';
}

j.onmouseover = function() {
    // To change the color of the element that triggered the event (in this case, 'j')
    r.style.display = 'inline';
}




let a = document.getElementById("ho2");
let b = document.getElementById("js2");

a.onmouseout = function() {
    // To change the color of the element that triggered the event (in this case, 'j')
    b.style.display = 'none';
}

a.onmouseover = function() {
    // To change the color of the element that triggered the event (in this case, 'j')
    b.style.display = 'inline';
}


let htm=document.getElementById('ht');
let cd=document.getElementById('rot');
let javas=document.getElementById('jssro');
let reac=document.getElementById('rea');
let redu=document.getElementById('rearo');

htm.onmouseover=function(){
  htm.src='images/htmlorg.jpg'
}

htm.onmouseout=function(){
  htm.src='images/htmlblack.png'
}

cd.onmouseover=function(){
  cd.src='images/csssorg.jpg'
}

cd.onmouseout=function(){
  cd.src='images/cssblack.png'
}
javas.onmouseover=function(){
  javas.src='images/jsorg.png'
}

javas.onmouseout=function(){
  javas.src='images/javablack.png'
}
reac.onmouseover=function(){
  reac.src='images/reactorg.jpg'
}

reac.onmouseout=function(){
  reac.src='images/reactblack.webp'
}
redu.onmouseover=function(){
  redu.src='images/reduxorg.webp'
}

redu.onmouseout=function(){
  redu.src='images/reduxblack.webp'
}
