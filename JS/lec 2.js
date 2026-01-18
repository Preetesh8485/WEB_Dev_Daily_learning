//for loop

for(let i=0;i<=10;i++){
    console.log("preetesh",i);
}

//while loop
/*
while(condition){

}
*/
let i =-2;
while(i<2){
    console.log(i);
    i++;
}
/* Do{
}while(condition);
 */

// for of and for in
let stringVar="preetesh";
for(let a of stringVar){
    console.log(a);
}
let objVar={
    name:"Preetesh",
    age:21,
    sgpa:9.4,
    pass:true,
};
for(let a in objVar){
    console.log(a,":",objVar[a]);
}
