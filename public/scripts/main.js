"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var menuToggle=document.querySelector(".header-toggle"),menuHeader=document.querySelector(".header-menu"),expandClass="is-expand",wedoItem=(menuToggle.addEventListener("click",function(){menuHeader.classList.add(expandClass)}),window.addEventListener("click",function(e){menuHeader.contains(e.target)||e.target.matches(".header-toggle")||menuHeader.classList.remove(expandClass)}),$(document).ready(function(){$(".quote-container").slick({prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",responsive:[{breakpoint:767,settings:{arrows:!1}}]})}),document.querySelector(".wedo-item")),wedoItemHeader=document.querySelectorAll(".wedo-item-header");function handleAccordion(e){console.log(e.target.parentNode),e.target.parentNode.classList.toggle("is-active")}[].concat(_toConsumableArray(wedoItemHeader)).forEach(function(e){return e.addEventListener("click",handleAccordion)});