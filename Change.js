//#Change Calculator

// - ให้เขียน Function เพื่อทำการรับเงินค่าสินค้า และ จำนวนเงินที่ลูกค้าชำระ 
//จากนั้นให้ทำการคืนผลลัพธ์เป็นเงินทอนที่ประกอบด้วย 
//แบงค์ 500, แบงค์ 100, แบงค์ 50, แบงค์ 20, เหรียญ 10, เหรียญ 5, เหรียญ 2, และเหรียญ 1 บาท
// - ให้สร้างแบงค์และเหรียญเงินทอนที่เป็นไปได้เป็นโครงสร้าง Object

function changeCalculator(order,pay){
    if (pay <= order)
    return -1;

    change = pay -order;

    let changeResult = {};
    changeResult.B500 = Math.floor(change / 500);
    changeResult.B100 = Math.floor((change % 500) / 100);
    changeResult.B50 = Math.floor(((change % 500)%100)/50);
    changeResult.B20 = Math.floor((((change % 500)%100)%50)/20);
    changeResult.B5 = Math.floor(((((change % 500)%100)%50)%20)/5);
    changeResult.B2 = Math.floor((((((change % 500) % 100) % 50) % 20) % 5) / 2);
    changeResult.B1 = Math.floor((((((change % 500) % 100) % 50) % 20) % 5) % 2);
    
    return changeResult;
} 
console.log(changeCalculator(222,1000));