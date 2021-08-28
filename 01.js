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

// x = parseInt('1.2'); // 1
// x = parseFloat('1.2'); // 1.2
// x = Math.pow(2, 3); // 8
// x = Math.ceil(1.5); // 2
// x = Math.floor(1.5); // 1
// x = Math.abs(-10); // 10
// x = Math.PI; // <span class="objectBox objectBox-number ">3.141592653589793</span>
// x = Math.random(); // <span class="objectBox objectBox-number ">0.753489534278567</span>

var x;
console.log(typeof x); // undefined ภาษากำหนดค่าเริ่มต้นมาให้

var y = null;
console.log(typeof y); // nullเราเป็นคนกำหนดเอง