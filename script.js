// Script for navigation bar
 

//making the hamburger menu(bar) and navbar (nav) and close (close) variables to obtain the id from html.

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const preloader = document.querySelector(".preloader");


//checking the condition tghat if the navbar is showing on the screen on not

if(bar) { //if anyone clicks on the bar
    bar.addEventListener('click', ()=> { //an event will be happening called "click"
        nav.classList.add('active')  //if anyone clicked on the hamburger menu, nav bar will be displayed // add the active class in navbar id in styles
    })
}

if(close) { //if anyone clicks on the close
    close.addEventListener('click', ()=> { //an event will be happening called "click"
        nav.classList.remove('active')  //if anyone clicked on the hamburger menu, nav bar will be displayed // add the active class in navbar id in styles
    })
}


window.addEventListener("load", function () {
    setTimeout(function() {
      preloader.classList.add("hide");
      // Remove the preloader from the DOM
      setTimeout(function() {
        preloader.parentNode.removeChild(preloader);
      }, 500); // 0.5 seconds
    }, 500); // 0.5 seconds
  });