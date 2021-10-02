class Customer{
    constructor(fname , lname){
        this._firstname = fname;
        this._lastname = lname;
    }
}

let acid = 1001;

class BankAccount{
    constructor(Customer){
        this._balance = 0; //this.คือ attribute
        this._customer = Customer;
        this._accountId = acid;
        acid += 1;
    }
    deposit(money){ //methodคือทำอะไรได้บ้าง
        this._balance = this._balance + money;
        return true;
    }
    getBalance(){
        return this._balance;
    }
    withdraw(money){
        if(this._balance < money){
            return 'Not enough';
        }
        else
            this._balance -= money;
            return 'Complete Withdraw';
    }
}

let c1 = new Customer('zin','zz');
let c2 = new Customer('job','xx');

let a1 = new BankAccount(c1);
let a2 = new BankAccount(c2);

console.log(a1);
console.log(a2);
console.log(a1.deposit(500));
console.log(a1.getBalance());
console.log(a1.withdraw(200));
console.log(a1.getBalance());
console.log(a2.deposit(500));
console.log(a2.getBalance());
console.log(a2.withdraw(200));
console.log(a2.getBalance());