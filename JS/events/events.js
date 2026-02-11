// let btn1 = document.querySelector("#btn1");
// let count =1;
// node.event=()=>{

// }
// btn1.onclick=()=>{
    
// console.log(`button was clicked ${count}`);
// count++;
// alert('button click tested');

// };


//event object
//e.type, e.target, e.clientX, e.clientY



// Event listener
/*
node.addEventListener(event,callback)
node.removeEventListener(event,callback)


*/
// const btnhandler =()=>{
//     console.log(`button was clicked ${count} testing for multiple`);
//     count++;}
// btn1.addEventListener("click",()=>{
//     console.log(`button was clicked ${count}`);
//     count++;
//     alert('button click tested');
// })
// btn1.addEventListener("click",btnhandler)
// btn1.removeEventListener("click",btnhandler);
let btn1 = document.querySelector("#screenMode");
let body=document.querySelector("body");
let currmode="light";
btn1.addEventListener("click",()=>{
 if(currmode==="light"){
    currmode="dark";
    //document.querySelector("body").style.backgroundColor="#0c0c0c";
     body.classList.remove("light");
    document.querySelector("body").classList.add("dark");
 }
 else{
    currmode="light";
    //document.querySelector("body").style.backgroundColor="#fff";
     body.classList.remove("dark");
    document.querySelector("body").classList.add("light");
 }
 console.log(currmode);
})