//count vowels
let myfunction = (array)=>{
    let count =0;
for(let i=0;i<array.length;i++){
    if( array[i] === 'a' ||
            array[i] === 'e' ||
            array[i] === 'i' ||
            array[i] === 'o' ||
            array[i] === 'u'){
        count++;
    };
    
}
console.log(count);
return count;
}
let array=['a','e','i','c'];
myfunction(array);

//square of each value
let arr =[1,2,3,4,5,6,7];
let i=0;
arr.forEach(function printValue(val){
    val=val*val;
    arr[i]=val;
    i++;
})
console.log(arr);