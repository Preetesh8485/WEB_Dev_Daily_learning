let marks=[85,97,44,37,76,60];
let sum=0;
for(let val of marks){
    sum+=val;
}
let average = sum/marks.length;
console.log(average);

let costs=[250,645,300,900,50];
for(let i=0;i<costs.length;i++){
    costs[i]-=costs[i]/10;
}
console.log(costs);
