let user = [10, 3, "raushaan ", true];
// it store the heterogenouse typee of data it can store any type of data 

//console.log(user);

//can i cnage and update the data in array
user[1] = 100;
console.log(user);

let num = [10,20,30,40,50];

// push or pop dono kr skta hu inme se 
num.push(60);
console.log(num);

num.pop();// last walaa element delete hota haai bs 
console.log(num);

//agr startin wala element ddelet krna ho to 


num.unshift(11);//add hota hai unshift se starting me element add hota hai
console.log(num);

num.shift();// starting wala element delete hota hai shift se
console.log(num);

//for of loop ka use bhut krte hai 
let num4  = [10,20,30,40,50];
for(let i of num4){
    console.log(i);
}

//slice and aplice

let marks = [10,20,30,40,50];
const a = marks.slice(1,4);// 1 se start hoga aur 4 se pehle tk element lega
console.log(a);
console.log(marks);// original array change nhi hota hai slice se

//splice
const b = marks.splice(3,3,6);// 1 se start hoga aur 3 element delete karega
console.log(b);
console.log(marks);// original array change hota hai splice se  
