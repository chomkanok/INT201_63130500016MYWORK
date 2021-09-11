//class
class Player{
    constructor(firstname = 'unknow', lastname = 'unknow'){
        this._firstname = firstname; //_ไม่ให้ซ้ำกับmethod get
        this._lastname = lastname;
    }

    get firstname(){
        return this._firstname;
    }

    set firstname(Fname){
        this._firstname = Fname;
    }

    get lastname(){
        return this._lastname;
    }

    set lastname(Lname){
        this._lastname = Lname;
    }
}

let player1 = new Player("B","N");//constructor เก็บไว้ใน firstname,lastname
let player2 = new Player("C");
console.log(player1);
// console.log(player2);
// player1.firstname = "z"//เปลี่ยนค่าfirstnameของ player1 ผ่าน setter Fname,this._firstname=z
// console.log(player1);
// console.log(player2.lastname);
