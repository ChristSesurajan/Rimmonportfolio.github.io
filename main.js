let j = document.getElementById("ho1");
let i = document.getElementById("js1");

j.onmouseout = function() {
    // To change the color of the element that triggered the event (in this case, 'j')
    i.style.display = 'none';
}

j.onmouseover = function() {
    // To change the color of the element that triggered the event (in this case, 'j')
    i.style.display = 'inline';
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
