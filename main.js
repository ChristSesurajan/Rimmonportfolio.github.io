let mon=document.getElementById('moon');
let eart=document.getElementById('earth');



document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('.about');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        element.classList.add('animate');
      } else {
        element.classList.remove('animate');
      }
    });
  }, {
    threshold: 0.3 // Adjust based on when you want the animation to trigger (0 to 1)
  });

  observer.observe(element);
});

document.addEventListener('DOMContentLoaded', () => {
    let wels=document.getElementById('welcomeco');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            wels.style.animationName='opac';
            wels.style.animationDuration='2s'
          } else {
            wels.style.animationName='none';
          }
        });
      }, {
        threshold: 0.3 // Adjust based on when you want the animation to trigger (0 to 1)
      });
      observer.observe(wels);
})


document.addEventListener('DOMContentLoaded', () => {
    let wels=document.getElementById('Projec');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            wels.style.animationName='opac';
            wels.style.animationDuration='2s'
          } else {
            wels.style.animationName='none';
          }
        });
      }, {
        threshold: 0.3 // Adjust based on when you want the animation to trigger (0 to 1)
      });
      observer.observe(wels);
})


document.addEventListener('DOMContentLoaded', () => {
    let wels=document.getElementById('skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            wels.style.animationName='opac';
            wels.style.animationDuration='2s'
          } else {
            wels.style.animationName='none';
          }
        });
      }, {
        threshold: 0.3 // Adjust based on when you want the animation to trigger (0 to 1)
      });
      observer.observe(wels);
})
document.addEventListener('DOMContentLoaded', () => {
    let wels=document.getElementById('footer');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            wels.style.animationName='opac';
            wels.style.animationDuration='2s'
          } else {
            wels.style.animationName='none';
          }
        });
      }, {
        threshold: 0.3 // Adjust based on when you want the animation to trigger (0 to 1)
      });
      observer.observe(wels);
})

document.addEventListener('DOMContentLoaded', () => {
    let wels=document.getElementById('anii');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            wels.style.animationName='opac';
            wels.style.animationDuration='2s'
          } else {
            wels.style.animationName='none';
          }
        });
      }, {
        threshold: 0.3 // Adjust based on when you want the animation to trigger (0 to 1)
      });
      observer.observe(wels);
})





window.addEventListener("wheel", function(event) {
    // Check if scrolling down
    if (event.deltaY > 0) {
        // Add CSS animation properties for moon
        mon.style.animationName = 'shrik';
        mon.style.animationDuration = "3s";

        // Add CSS animation properties for earth
        eart.style.animationName = 'movedown';
        eart.style.animationDuration = "2.5s";
    } 
    // Check if scrolling up
    else if (event.deltaY < 0) {
        // Add CSS animation properties for moon
        mon.style.animationName = 'zoomin';
        mon.style.animationDuration = "3s";

        // Add CSS animation properties for earth
        eart.style.animationName = 'moveup';
        eart.style.animationDuration = "3s";
    }
});

// Function to handle touch events
function handleTouchAnimation(event) {
    // Get the touch position
    let touchY = event.touches[0].clientY;

    // Check if touch position is greater than the previous position (scrolling down)
    if (touchY > lastTouchY) {
        // Add CSS animation properties for moon
        mon.style.animationName ='zoomin' ;
        mon.style.animationDuration = "3s";

        // Add CSS animation properties for earth
        eart.style.animationName = 'moveup';
        eart.style.animationDuration = "3s";
    } 
    // Check if touch position is less than the previous position (scrolling up)
    else if (touchY < lastTouchY) {
        // Add CSS animation properties for moon
        mon.style.animationName = 'shrik';
        mon.style.animationDuration = "3s";

        // Add CSS animation properties for earth
        eart.style.animationName = 'movedown';
        eart.style.animationDuration = "2.5s";
    }

    // Update last touch position
    lastTouchY = touchY;
}

// Variables to keep track of last touch position
let lastTouchY = 0;

// Add event listeners for touch events
window.addEventListener("touchstart", function(event) {
    // Get the initial touch position
    lastTouchY = event.touches[0].clientY;
});

window.addEventListener("touchmove", handleTouchAnimation);




let etext=document.getElementById('pass1');

let passage = ['Hi, I am a London-based Full-Stack developer. Looking for a job right now feel free to connect with me'];

function timegi(){
let index = 0;
for (let i = 0; i < passage.length; i++) {
    
    for (let j = 0; j < passage[i].length; j++) {
        setTimeout(function() {
            if (passage[i].charAt(j) === '.') {
                etext.innerHTML += passage[i].charAt(j) + '<br>';
            } else {
                etext.innerHTML += passage[i].charAt(j);
            }
            
            
        }, 150 * index);
        index++;
    }
    
}
}

setTimeout(timegi,900)


let arrimg = ['./images/slide1.jpg','./images/slide2.jpg'];
let orgimg = document.getElementById('orgima');
function logi(){
for (let i = 0; i < arrimg.length; i++) {
    setTimeout(function() {
        orgimg.src = arrimg[i];
    }, 1000 * i); // Set timeout with increasing delay for each image
}
}
setInterval(logi,3000)

let buton=document.getElementById('fire');
let starwars=document.getElementById('ship');
buton.onclick=function(){
    starwars.style.animationName='';
    starwars.style.animationDuration='';
    void starwars.offsetWidth;
    starwars.style.animationName='shipmove';
    starwars.style.animationDuration='3s';

  
    
}





