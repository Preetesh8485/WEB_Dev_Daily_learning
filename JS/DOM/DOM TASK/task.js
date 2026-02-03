//appending a text to h2 using js
let h2=document.querySelector("h2");
h2.innerText =h2.innerText +" appending test 1"

//create 3 divs with common class name - "box ".access them and add some unique text to each of them
let box=document.querySelectorAll("div");
console.log(box);
box[0].innerText+=" hello1";
box[1].innerText+=" hello2";
box[2].innerText+=" hello3";
//using loop for adding same in all divs
for(let i=0;i<box.length;i++){
    box[i].innerText+=" hello1";
}