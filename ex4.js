//เเบบฝึกหัดที่4ให้เลือกกับการจัดการ Text String ให้ทดสอบโดยใช้Stringอย่างน้อย3 กรณีที่เเตกต่าง
//ให้เขียนFunctionเพื่อเเสดงเมนูให้เลือกในการจัดกรString

function reverse(text){
    let newText = '';
    for(i=text.length-1; i>=0; i--){
        newText += text.charAt(i); //charAt(index);ใช้แสดงผลตัวอักขระณตำแหน่งที่กำหนด
    }
    return newText;
}

function replaceVowels(text){
    let newText = '';
    let vowels = ['a','e','i','o','u','A','E','I','O','U']
    for (i=0; i<text.length; i++){
        if(vowels.includes(text.charAt(i))){ //includes ใช้เพื่อตรวจสอบคำที่ระบุปรากฏอยู่ในStringหรือไม่ที่ตำแหน่งใดก็ได้
            newText +='*';
        }else{
            newText += text.charAt(i);
        }
    }
    return newText;
}


function countVowels(text){ //นับสระ
    let count = 0;
    let vowels=['a','e','i','o','u','A','E','I','O','U']
    for(i=0; i<text.length;i++){
        if(vowels.includes(text.charAt(i))){
            count += 1;
        }
    }
    return count;
}

let text1 ='ilovemyJOB';
console.log(text1);
console.log('-----------------')
console.log(`Reverse string : ${reverse(text1)}`);
console.log(`Replace vowels with '*': ${replaceVowels(text1)}`);
console.log(`The number of vowels :${countVowels(text1)}`);
console.log('-----------------\n')

let text2 ='Wombat';
console.log(text2);
console.log('-----------------')
console.log(`Reverse string : ${reverse(text2)}`);
console.log(`Replace vowels with '*': ${replaceVowels(text2)}`);
console.log(`The number of vowels :${countVowels(text2)}`);
console.log('-----------------\n')