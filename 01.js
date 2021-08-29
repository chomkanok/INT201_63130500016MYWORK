//เเบบ1
const pound = 0.453592 //ใช้const เพราะกำหนดค่าpound เป็นfinal
const inch = 0.0254 //ใช้const เพราะกำหนดค่าinch เป็นfinal

function getBMI (pountokg , inchtometer){ //function ชื่อฟังก์ชั่น( ตัวแปรพารามิเตอร์ถ้ามี )
    let weight = pountokg*pound //Statement ที่ต้องการให้ทำงาน เมื่อมีการเรียก function
    let height = inchtometer*inch
    return weight / Math.pow(height,2) //return
}
console.log(getBMI(50,150))

//เเบบ2
getBMI

x = parseInt('1.2'); // 1
x = parseFloat('1.2'); // 1.2
x = Math.pow(2, 3); // 8
x = Math.ceil(1.5); // 2
x = Math.floor(1.5); // 1
x = Math.abs(-10); // 10
x = Math.PI; // <span class="objectBox objectBox-number ">3.141592653589793</span>
x = Math.random(); // <span class="objectBox objectBox-number ">0.753489534278567</span>

var x;
console.log(typeof x); // undefined ภาษากำหนดค่าเริ่มต้นมาให้

var y = null;
console.log(typeof y); // nullเราเป็นคนกำหนดเอง

//length in js is properties ใช้โดยไม่มีวงเล็บเปิดปิด


//template literals  

//${js expression} ใช่ข้างในได้มี variable${num}, function${grtNum},Operator${x+num},logical,method${"INT210".charAt(0)},literal${5}
//นิพจน์คือ นิพจน์ต้องให้ค้าออกมาค่านึง มีการอ้างถึงตัวเเปร หรือการใช้ตัวเเปร หรือการเรียกใช้ฟังชันหรือmethod เมื่อคำนวนออกมาเเล้วจะได้ค่าค่านึงเสมอ

//(Boolean exp)?true expression : false expression
x>y? x++ :y++  
x>y? console.log("xxx") : console.log("yyy") //--> XXXผิด
consoln.log(x>y?"xxx":"yyy") //--> ถูก consoln.logครอบอยู่ในนิพจน์ไม่ได้


//if(boolean expression){} if(3+5)/if(true)/if(5>10)
//Switch(int){} switch(3+5)

//Explicit Conversions สั่งเรียกใช้มัน
Number('3') //3
String(false) //"false"
Boolean([]) // true
'A' * 'B' //NaN

null == undefined // ture
null === undefined //false 
"0" == 0 //ture
0 == false //ture
"0" == false //ture เปลี่ยนเป็น 0==0  

//การเขียน obj  

let myObj = {
    id:1,
    task: 'grading exam'
};
let myObj2 = {
    id:1,
    task:'grading exam'
};

newObj = myObj;
console.log(`newObj === myObj is ${newObj === myObj}`);
console.log(`myObj1 === myObj2 is ${myObj === myObj2}`);
//output
//newObj === myObj is true
//myObj1 === myObj2 is false