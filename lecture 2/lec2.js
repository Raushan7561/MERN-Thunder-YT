console.log("HII");
let a = 20;
const b= 30;
let c = a;

console.log(a,b,c);
console.log(`type of a: ${typeof a}`);
console.log(`type of b: ${typeof b}`);
console.log(`type of c: ${typeof c}`);
console.log(typeof(a),typeof(b),typeof(c));

//primitive data types: number, string, boolean, null, undefined, symbol, bigint ---> immutable

// 1 Numbers
let  num1 = 20;
let num2  = 20.5;
console.log(`type of a: ${typeof (a)}, type of b: ${typeof(b)}`);
// last safe number value: let n = MAX_SAFE_INTEGER; (like INT_MAX in cpp)

//2 String
let str1 = "Hello";
let str2 = 'World';
let str3 = `Welcome to JavaScript`; //MODERN WAY backtick 
console.log(`type of str1: ${typeof str1}, type of str2: ${typeof str2}, type of str3: ${typeof str3}`);

//3 Boolean
let x = true;
x = false; //x pointing to new location where false is stored (in my understanding)
console.log(`typeof x: ${typeof x}`);



// 4 Null
let nullval = null;
console.log(`type of nullval: ${typeof nullval}`); //bug in js, it should be object but it is null
/* NULL  used to define the ans have arrived or not 
  ex: temprature getting from server inititally:undefined (cannot decide)
case 1: if null comes: out code can decide that server is not available or there is some fault/ unable to fectch data
case 2: if any other data type comes (i.e number): code can display that number as the temprature*/

//5 bigin
let bigint1 = 1234567890123456789012345678901234567890n; //n at the end to define bigint
console.log(`type of bigint1: ${bigint1}`);

//6 undifined
let undef = undefined;
console.log(`type of undef: ${typeof undef}`);

//7 symbol
let sym1 =Symbol("meow");
let sym2 =Symbol("meow"); // both symbol is lookinng same but both are duffernet and unique
console.log(`type of sym1: ${typeof(sym1)}, type of sym2: ${typeof sym2}`);
console.log(sym1==sym2); // false because both are unique

// non-premitive data types : object , Array , function

//1 ARRAY
let arr =[1,2,3,4,5];
console.log(`type of arr: ${typeof arr}`);

//2 OBJECT most important (key value pair)
let obj ={
    name: "raushan",
    age: "20",
    add: "patna"
}

console.log (`type of obj: ${typeof obj}`);

//3 FUNCTION : no need to write the return type (similar to python)
// fucntion in JS are data types so the functions can be wrapped up inside a variable say a as below:
 let aa = function greet(){
    console.log("Hello");
 }
console.log(aa);
//console.log(greet()); // error because greet is not defined in global scope it is defined inside aa variable
aa(); // this will work because aa is pointing to the location where greet function is stored


function greet(){
    console.log("Namaste");
}
greet(); // this will work because greet is defined in global scope

console.log(`type of  function greet: ${typeof greet}`);
console.log(`type of aa: ${typeof (aa)}`);

console.log(`typee of  greet: ${typeof (greet())}`); // undefined because greet function is not returning anything so it is undefined