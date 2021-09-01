//เเบบฝึกหัดที่5 เพื่อหาผลลัพธ์จากเมนูที่ให้เลือก โดยพิจารณาจากค่าที่สุ่มในช่วง1-100 จำนวน3ค่า
// 1.This function used for random the number between 1-100
function random(){
    number = Math.floor((Math.random() * 100)) + 1; //Math.floorใช้ปัดเศษทศนิยมให้เป็นเลขจำนวนเต็ม และให้มีค่าน้อยลง
    return number;
}

// This function used for find sum of number(หาค่าผลรวม)
function findsum(){
    let sum = num1+num2+num3;
    return sum;
}

// This function used for find minimun value
function findMin(){
    return(Math.min(num1,num2,num3));
}

// This function used for find maximum value
function findMax(){
    return(Math.max(num1,num2,num3));
 }

// Use random() function to random 3 number
let num1 = random();
let num2 = random();
let num3 = random();
console.log(`The number of random = ${num1}, ${num2}, ${num3}`);

//find and print sum, minimun value, maximun value by using the function above
console.log(`Sum = ${findsum()}`);
console.log(`Min = ${findMin()}`);
console.log(`Max = ${findMax()}`);



