class User{
    age:number;
    name:string;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    display():void{
        console.log("Name :"+this.name+" "+"Age :"+this.age);
    }
   
}                                                                  //User class is created with constructor and later object is also created.
    let users:User[]=[];
    let user1=new User("Harsh",21);
    users.push(user1);
    let user2=new User("DJ",22);
    users.push(user2);
    for(let i=0;i<users.length;i++){
        var u = users[i];
        u.display();
    }

class Customer extends User{                                //concept of inheritance is used here.
    balance:number; 
    constructor(name:string,age:number,balance:number){
        super(name,age);
        this.balance=balance;
    }

    display():void{
        super.display();
        console.log("Balance :"+this.balance);
    }

    }
    let customer1 = new Customer("Rahul",21,5000);
    customer1.display();

    

/*function display(){
    console.log("Type Script!");
}

display();
*/

/*let num:number=9;
let flag:boolean=true;
let nam:string="harsh";
let Strings:string[]=["hii","hello"];       //Strict datatype are defined.

let value:any=11;    //any datatype is used when we are not sure about the datatype to be used.
*/

function add(num1:number,num2:number):number{               //:number shows that return type of the function is number.
    let result=num1+num2;
    return result;
}
let res=add(10,20);
console.log("Result :"+res);
