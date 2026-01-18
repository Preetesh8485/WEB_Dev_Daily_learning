//even print
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}

//number guesser
let ans=69;
let userinp=prompt("Try guessing the number");
while(userinp!=ans){
    console.log("wrong answer");
    userinp=prompt("wrong,Try guessing the number");
}
console.log("correct answer");