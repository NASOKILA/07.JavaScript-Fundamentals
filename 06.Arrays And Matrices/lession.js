
let bigArr = [1,2,3,4,5]; 
const length = bigArr.length; 
for(let i = 0; i < length; i++){}

let arr = [1, 2, 3, 4];

console.log(arr);
console.log(arr[0]);

console.dir(arr);

arr[10] = true;
arr[8] = 'Nasko';
arr[9] = 5.67;
console.log(arr);

arr.push(33);
console.log(arr);

arr.pop();
console.log(arr);

console.log();

arr.shift(); 
console.log(arr);

console.log();

console.log(arr.shift([5,6,7]));

let arr2 = [5,6,7].concat(arr);
console.log(arr2);

console.log();

arr.unshift(555); 
console.log(arr);

console.log();

arr['naso'] = 'NASO';
console.log(arr);

console.log();

console.log(); console.log();
arr.forEach(e => console.log(e));

console.log(arr.join('-'));

console.log();

let jsonArrInString = JSON.stringify(arr);
console.log(jsonArrInString);

console.log();

console.log(JSON.parse(jsonArrInString));

let arr3 = arr.slice(7);
console.log(arr3);

arr3.splice(2);
console.log(arr3);

console.log();console.log();console.log();

let arrStr = ['10','20','30','40'];
let arrNum = arrStr.map(e => Number(e)); 
console.log(arrNum);

console.log();console.log();console.log();

let arr4 = [5,8,1,99,124,77];
console.log(arr4);
arr4 = arr4.sort((a, b) => (a - b));
console.log(arr4);

console.log();
console.log('Matrici:')

let matrix =
    [[1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]];

console.log(matrix[2][2]);  // 13
console.log(matrix[3][4]);  // 20
console.log(matrix[4][2]);  // 23

console.log();

console.log('Printing a matrix :');
console.log(matrix.map(row => row.join(' ')).join('\n'));
