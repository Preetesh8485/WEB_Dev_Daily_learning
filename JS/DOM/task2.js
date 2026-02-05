// //attributes
// let div = document.querySelector("div"); // get the attribute value
// console.log(div);

// let para = div.getAttribute("name");
// console.log(para);

//setAttribute(attr,value)
let newpara = document.querySelector("div");
console.log(newpara.setAttribute("class","parametric"));

let paras=document.querySelector("div");
paras.style.backgroundColor="green"

/*
let el = document.createElement("div")
node.append(el) adds at the end of node (inside)
node.prepend(el) adds at the start of node (inside)
node.before(el)adds before the node(outside)
node.after(el) adds after the node(outside)
node.remove() removes the node
*/
let newbtn = document.createElement("button");
newbtn.innerText="button"
console.log(newbtn);
newpara.append(newbtn);
newpara.prepend(newbtn);
newpara.before(newbtn);
newpara.after(newbtn);
newbtn.remove();
