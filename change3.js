class Money { 
    constructor(value){ 
        this._value = value;
    }
    get value(){
        return this._value;
    }
    toString(){
        return `${this.value}`;
    }
}
//เป็นobj ของmoney เชื่อมกับconstrutor
const banknote500 = new Money(500);
const banknote100 = new Money(100);
const banknote50 = new Money(50);
const banknote20 = new Money(20);
const banknote10 = new Money(10);
const banknote5 = new Money(5);
const banknote2 = new Money(2);
const banknote1 = new Money(1);

function changeMoneyCalculation(price,moneyFromCustomer){
    if(price>changeMoneyCalculation){
        return 'NOT MONEY ! !';
    }

    let total; //ตัวเเปร จะสร้างก็สร้าง
    total = moneyFromCustomer-price;

    //ใส่ค่าของธนบัตร เอาobj มาใส่ในอาเรย์
    let arrayBank =[banknote500,banknote100,banknote50,banknote20,banknote10,banknote5,banknote2,banknote1];
    //ใส่จำนวนธนบัตร
    let countBank =[bank500=0,bank100=0,bank50=0,bank20=0,bank10=0,bank5=0,bank2=0,bank1=0];

    //for loopที่สร้างมาเพื่อนับเงินทอน for ตามธนบัตรที่มี arrayBank.length จะหลุดเมื่อนับครบ
    for(let i=0; i< arrayBank.length; i++){

        while(total - arrayBank[i] >=0){ //while เช็คจนเงินที่ทอน เงินทอน-ค่าของธนบัตร มากกว่า0 ทำต่อ
            total -= arrayBank[i]; // 900 -= 900-ค่าของธนบัตร[500] เก็บค่าใหม่ลงในtotal =400 
            countBank[i]++; //เเล้ววนกับไปทำwhileใหม่ ถ้า 400-500>=0ให้ออก ก็ออกมา จบ ไปทำfor ต่อ
        }
    }
 
    let ans =`Total of change is ${moneyFromCustomer-price}.`; 

    for(i=0; i<countBank.length; i++){


        if(countBank[i] > 0){ //countBank[i] //คือมีเเบงค์กี่ใบ
            if(i == countBank.length - 1){ //ถ้าเป็นตัวสุดท้ายไม่มีคอมม่า
                ans += `Banknote${arrayBank[i].value}: ${countBank[i]}` //i=0 เพราะอินเด็กเเรก
            }else
                ans += `Banknote${arrayBank[i].value}: ${countBank[i]},`;
        }
    }
    return ans;
}

console.log(changeMoneyCalculation(1000,1234));