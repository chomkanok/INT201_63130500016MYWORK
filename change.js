//ให้สร้างเเบงค์เเละเหรียญเงินทอนที่เป็นไปได้เป็นobj
//เขียนfunctionรับเงินค่าสินค้าเเละจำนวนเงินที่ลูกค้าชำระจากนั้นคืนค่าเป็นเงินทอน500,100,50,20,10,5,2,1

function torn(cashProduct,cashCustomer){
    let cash =[500,100,50,20,10,5,2,1];
    let numbercash = [0,0,0,0,0,0,0,0];
    let cal = cashCustomer - cashProduct; //ค่าเงินทอนไว้คำนวน
    let calbefore = cal; //copyไว้เเสดง
    let text =[]; //เก็บเป้นarray เเต่ข้างในเก็บเป็นobj

    if(cal<0){
        return "เงินคุณไม่พอ"
    }else{
        for(index = 0 ; index < cash.length ; index++ ){
            numbercash[index] = Math.floor(cal / cash[index]); //Math.floorใช้ปัดเศษทศนิยมให้เป็นเลขจำนวนเต็ม และให้มีค่าน้อยลง
            cal = cal-(numbercash[index]*cash[index]); //550-(1*500) cal=50
            //console.log(numbercash[index]);
            text.push(`\n ${cash[index]} : ${numbercash[index]} ใบ`); //คือการaddข้อมูลลงในarray
        }//text.push คือใส่ไว้ในอาเรย์เฉยๆยังไม่ปริ้นออกมา
    }

    return `เงินทอน : ${calbefore} จำนวนเงิน ${text}`; 

};

console.log(torn(10000,2178));