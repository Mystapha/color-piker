var color=document.getElementById("color");
var box=document.getElementById("color-box");
var btn=document.getElementById("change-coleur-btn")


function getRandomColor(){

box.style.backgroundColor=color.value;
btn.style.backgroundColor=color.value;
btn.style.color="white";
}