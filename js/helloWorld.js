// alert(`Hello World from helloWorld.js!`)
// let a = 5, b = 6, c = 7, d = 'abc';
// console.log(a + b + c+ d );

// template string backtick ${}

// let a = 4;
// let b = 5;

// console.log(`a + b = ${a + b}`); // 9
// console.log(`Hinh chữ nhật 
//             Chiều dài  = ${a}
//             Chiều rộng = ${b}
//             Chu vi     = ${2*(a+b)}
//             Diện tích  = ${a*b}
//             `)

// object key:value

// let obj ={
//     name:`Berry`,
//     old: 20,
//     address:`HCM`
// }
// console.log(
//     `Name: ${obj.name}
//      Old: ${obj.old}
//      Address: ${obj.address}`
//             )
// console.log(obj);

// array []

let arr=[1,2,3,4,5,6,7,8,9,10];
 console.log(arr);

let famlily =[{name:`Berry`, age:20},{name:`Jerry`, age:25},{name:`Tom`, age:30}];
console.log(famlily);

//so sánh == vs ===
//chỉ nên sử dụng ===

// for loops
for (let i = 0; i < arr.length; i++) {
    console.log(`arr[${i}]= `,arr[i]);
}

//while loops
let i = 0;
while (i < arr.length) {
    console.log(`arr[${i}]= `,arr[i]);
    i++;
}

//function
let a = 5;
let b = 6;
function sum(a,b){
    return a + b;
}
console.log(`result: ${a} + ${b} = ${sum(a,b)}`);