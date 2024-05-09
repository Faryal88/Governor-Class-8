// String literal:
let age:number = 18;
let country = "Pakistan";
age = 18;
console.log(`My age is ${age} and my country is ${country}`);

// Function:
function Hello(){     //Declaring function
	console.log("Hello world from function") // Code
}
Hello() // Calling a function
Hello() // Calling a function

// Greet:
function Greet1(){   //Declaring function
	console.log("Hello Faryal") // Code
}
Greet1() // Calling a function


// Greet Function:
function Greet(name){  //Parameter
	console.log(`Hello ${name}`);  // Code
}
Greet("Faryal")  // Arguments
Greet("Abbasi")  // Arguments
Greet("Zainab")  // Arguments
Greet("Raima")  // Arguments

// Function Email
function Greet(name, age, email){
	console.log(`Hello ${name} and my age is ${age} and my email is ${email}`)
}
Greet("Faryal", "18", "faryalabbasi88@gmail.com") // Arguments

function Greet(name:string){
	console.log(`Hello ${name}`)
}
Greet("Faryal")
Greet("Faiez")
Greet("Raima")
Greet("Zainab")
Greet("Aamir")

// 5 * 5
function Root(digit: number){
	console.log(digit * digit)
}
Root(5)
Root(10)
Root(15)
Root(20)

// 5 * 5 * 5
function Root1(digit: number){
	console.log(digit * digit * digit)
}
Root(5)
Root(10)
Root(15)
Root(20)

// Function Email, Age
function userInfo(email:string, age:number){
	console.log(`My email is ${email} and age is ${age}`);
}
userInfo("faryalabbasi88@gmail.com", 18)
userInfo("faiezabbasi77@gmail.com" , 22)