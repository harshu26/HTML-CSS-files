var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("Name :" + this.name + " " + "Age :" + this.age);
    };
    return User;
}()); //User class is created with constructor and later object is also created.
var users = [];
var user1 = new User("Harsh", 21);
users.push(user1);
var user2 = new User("DJ", 22);
users.push(user2);
for (var i = 0; i < users.length; i++) {
    var u = users[i];
    u.display();
}
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(name, age, balance) {
        var _this = _super.call(this, name, age) || this;
        _this.balance = balance;
        return _this;
    }
    Customer.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Balance :" + this.balance);
    };
    return Customer;
}(User));
var customer1 = new Customer("Rahul", 21, 5000);
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
function add(num1, num2) {
    var result = num1 + num2;
    return result;
}
var res = add(10, 20);
console.log("Result :" + res);
