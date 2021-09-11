function Player(firstname,lastname){
    let Fname;
    let Lname;

    if(firstname){
        this.Fname = firstname;
    }else{
        this.Fname = 'unknow'
    }

    if(lastname){
        this.Lname = lastname;
    
    }else{
        this.Lname = 'unknow'
    }

    return this.Fname + this.Lname;
}

let player1 = new Player("z","f")
console.log(player1);
