//basic object
const student= {
    fullname:"preetesh",
    marks:9.6,
    printmarks: function(){
        console.log("marks = ",this.marks);
    },
};

//prototyes in js  //reference to an object or points to null if doesnt exist
// note: if  object and prototype have same method then object method will be used
const employee={
    calctax(){
        console.log("30% income tax ");
    }
}

const preetesh={
    salary:120000
}
preetesh.__proto__=employee;


//class
class Car{
    // constructor(brand){
    //     this.brand=brand;
    //     console.log("this is a car");
    //     console.log("brand name : ",brand);
    // }
    constructor(brand,milage){
        this.brand=brand;
        this.milage=milage;
        console.log("this is a car");
        console.log("brand name : ",brand);
        console.log("milage claimed : ",milage);
    }
    start(){
        console.log("engine has started");
    }
    stop(){
        console.log("engine has stopped");
    }
    // setBrand(brand){
    //     this.brand=brand;
    // }
}

//object using class

// let marutiSuzuki = new Car("MSIL",23);
// marutiSuzuki.start();
// marutiSuzuki.stop();
// marutiSuzuki.setBrand("MSIL");


//inheritance
//keyword "extends"
class engine extends Car{
    constructor(){
        super();
        console.log("ENGINE REPRESENTATIOM: ")
    }
    
    enginetype(){
        console.log("v8");
        super.stop();
    }
}
//method overriding , if parent and child has same method then child method is invoked
let marutiSuzuki = new engine();
marutiSuzuki.enginetype();

//super keywords