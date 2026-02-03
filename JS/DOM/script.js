console.log("hello is this working");
window.console.log("hello for 2nd time");
// already js knows about windows object

//DOM: document Object Model
//console.dir(document); // printing window object


//runtime changes via js using DOM
//document.body.style.background ="black"; changes the bgc to black but runs on broweser console 
//used for Dynamic manipulation
let heads=document.getElementById("heading");
console.log(heads);

let a=document.getElementsByClassName("button");

let b=document.getElementsByTagName("p");
console.log(b);

//query selector
//document.querySelector("ID/class/tag")
//returns first element

//document.querySelectorAll("ID/class/tag")
//return a NodeList
let c=document.querySelector("p");
let d=document.querySelectorAll("p");
console.dir(c);
console.dir(d);
let div = document.querySelector("div");
console.dir(div);
console.log(div.innerText);

//properties of DOM manipulation
/*
tagName: returns tag for element nodes
innerText:returns the text content of the element and all its children
innerHTML:returns the plain text or HTML contents in the element
textContent:returns textual content even from hidden elements

*/