//get user to input using prompt("enter a number:"). check if the number is a multiple of 5 or not
// done in broweser
let a = Number(prompt("enter a number"));
if(a%5 === 0){
    alert("input is multiple of 5");
}else{
    alert("not a multiple of 5")
}

let b = Number(prompt("enter your marks "));
if(b>0&&b<=49){
    alert("F");
}
else if(b>49&&b<=59){
    alert("D");
}
else if(b>59&&b<=69){
    alert("C");
}
else if(b>69&&b<=89){
    alert("B");
}
else if(b>89&&b<=100){
    alert("A");
}
else{
    alert("invalid input")
}