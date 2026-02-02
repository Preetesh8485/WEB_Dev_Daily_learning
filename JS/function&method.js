//sample function syntax

function myFunction(){
    console.log("this is a function");
}

myFunction(); //invoke

//arrow function
const newfunction=(i,j) => {
    i++;j--;
    return [i,j];
}
let a=38;
let b=8;
[a,b]=newfunction(a,b);
console.log(a," ",b)

//forEach loop its a callback method
let arr =[1,2,3,4,5,6,7];
arr.forEach(function printValue(val){
    console.log(val);
})

//map
//syntax : arr.map(callbackFnx(value,index,array))
let num =[1,2,3,4,5,6,7];
num.map((val)=>{
    console.log(val+1);
})

//filter
let newarray = num.filter((val)=>{
    return val%2===0;
})
console.log(newarray);

//reduce 
const output=arr.reduce((res,curr)=>{
    return res +curr;
});
console.log(output);