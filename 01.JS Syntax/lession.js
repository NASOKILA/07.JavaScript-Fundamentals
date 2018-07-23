
function Hi() {
    console.log('Hello!');
}

Hi();

let a = 5;
let b = 15;
let sum = a + b;
console.log(sum);

console.log();
console.log("STRINGOVE:");

let str = "nasko";
console.log(str[1]); 

str[1] = "A";
console.log(str); 

console.log();
console.log("MASIVI:");

let masiv = [1,2,3];
masiv[5] = true;
masiv[8] = 5.555;
masiv[10] = "deset"; 
console.log(masiv); 
console.log(masiv.length); 

console.log();
console.log("Obekti:");

let obj = {name:"Nasko",age:24}
console.log(obj.name);
console.log(obj.age);

obj.name = "Atanas Kambitov";

obj.color = "red";
obj.rect = undefined;

console.log(obj);

console.log();
console.log("Destructuring:");

let arr = ["Nasko", "Eimi", "Gafy"];
console.log(arr);

let [man, woman, dog] = arr;  
console.log(man);
console.log(woman);
console.log(dog);

console.log();
console.log("var vs let  -  function scope vs block scope");

console.log();
console.log("Contant variables: ");

const name = "Atanas";

console.log();
console.warn("Warning example");  
console.error("Error Example"); 