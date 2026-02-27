class User{
    constructor(Name,email){
        this.Name=Name;
        this.email=email;
    }
    viewData(){
        console.log(this.Name);
        console.log(this.email);
    }
}
class Admin extends User{
    constructor(Name,email){
        super(Name,email);
    }
    editData(newName,newEmail){
        this.Name;
        this.email;
    }
}

let stud1=new User("preetesh","preetesh@gmail.com");
let stud2=new User("reetesh","reetesh@gmail.com");

// error handling

// try {
    
// } catch (error) {
    
// }