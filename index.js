// //alert('Hello');



// const array = ['Virsila', 'Dirkstys', 'Maybach', 'Rimkenzo'];



// console.log(array);


// array.push('Maslabojev');

// console.log(array);


// console.log(array.pop())

// console.log(array.shift());

// array.unshift('Kunigas');

// console.log(array);

// array.splice(2, 'Minde');

// console.log(array);


// const words = ['Dsjsdj', 'dwddjkmpd', 'Gsss', 'ddhdjd'];

// console.log(words);

// const upperCase = words.filter(word => word === word.toUpperCase());


// console.log(upperCase);



// function evenOrOdd(number) {
//     if (number % 2 == 0) {
//         console.log('number is even')
//     } else {
//         console.log('number is odd')
//     }
// }

// console.log(evenOrOdd(3));


// function factional(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }


// console.log(factional(6));


// const numsArr = [5, 6, 8, 10, 11, 12];

// function largestNum(numsArr) {
//     return Math.max.apply(null, numsArr);
// }


// console.log(largestNum(numsArr));


// function averageNum(numsArr) {
//     return numsArr.reduce((a, b) => a + b, 0) / numsArr.length;
// }

// console.log(averageNum(numsArr));



// // for (let i = 1; i <= 1000; i++) {
// //     console.log(i)
// // }

// for (let i = 0; i <= array.length; i++) {
//     console.log(array[i]);
// }


// const data = {
//     name: 'John',
//     age: 28,
//     maritalStatus: true
// };

// for (let elem in data) {
//     console.log(elem, data[elem]);
// }

// function sumArray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }


// function sum10(num) {
//     let sum = 0;
//     for (let i = 0; i < numsArr.length; i++) {
//         sum += numsArr[i > 10]
//     }
//     return sum
// }

// console.log(sum10(numsArr));

const body = document.querySelector('body');
const btn = document.querySelector('button');
const text = document.querySelector('h1');

console.log(btn);
console.log(body);


btn.addEventListener('click', randomColor)



function randomColor() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = randomColor
    text.innerHTML = randomColor;

}