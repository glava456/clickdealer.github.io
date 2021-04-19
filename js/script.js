"use strict";

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {

  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header").style.top = "0";
    document.querySelector(".main").classList.remove("main__active-header");

  } else {
    document.querySelector("header").style.top = "-50px";
    document.querySelector(".main").classList.add("main__active-header");
  }
  prevScrollpos = currentScrollPos;
}