// VARIABLES ,DATATYPES,BASIC OPERATOR,TYPE CONVERSIONS,INTERACTIONS
// let name= prompt("what is your name?");
// console.log(`i am ${name} aka somek`)

// let myAge = confirm ("Are you 18 years old?")saqw
// console.log(myAge)

// alert( Number(  "123"  ) ) //123
// alert( Number("123z") ) //NaN
// alert( Number(true) ) //1
// alert( Number(false) ) //0
// console.log( Number(false) ) //0
// console.log( Number("123") ) //123
// let a=1;
// a=-a;
// alert(a);

// let x=1, y=3;
// alert(y-x);

// alert(5%2);//gives the reminder as a result
// alert(2**5);//2 in 5 places which is equal to 32
// alert(64**(1/6));



// let username =prompt("what is your username");
// console.log(username);

// let username;
// document.getElementById("submit").onclick = function () {
//     username =document.getElementById("lab").value;
//     document.getElementById("h1").textContent =`Hello ${username}`
// }
// alert(username);

// IF CONDITIONAL STATEMENT
// let year = prompt("what year were you born");
// if(year==2005){
//     alert("whoosh!that's awesome")
// } 
// else if (year<2005) {
//     alert("try something higher!")}
// else{
//     alert("try something lower!")
// };

// let cond = (year==2005);
// if(cond){
//     alert("whoosh!that's awesome")
// };

// let accessAllowed;
// let age =prompt ("what is your age?", '');
// if (age>18) {
//     accessAllowed = true; 
// } else {
//     accessAllowed = false;
// }
// alert(accessAllowed);

// let age;
// let accessAllowed = (age>18)? true:false;
// alert(age);

// let age =prompt ("age?", 18);

// let message = (age<3)? "Hi, baby!":
//   (age<18) ? "Hello!" :
//   (age<100) ? "Greetings!" :
//   "What an unusual age!";

//   alert(message);


// let age =prompt ("age?", 18);
// if (age<3) {
//     message = "Hi, baby!";
// } else if (age<18) {
//     message = "Hello!";
// }  else if (age<100) {
//     message = "Greetings";
// } else {
//     message =  "What an unusual age!"; 
// }


// LOGICAL OPERATORS
// // OR(||) operator
//     alert (true||true);
//     alert (true||false);
//     alert (false||true);
//     alert (false||false);
// used in an if statement
// let hour = 9;
// if (hour<10 || hour>18) {
//     alert("the office is closed")
// }
// truthy statement
// let firstName ="";
// let lastName ="";
// let nickName ="SuperCoder";
// alert (firstName||lastName||nickName)
// if all operand are false,returns the first truthy value or
//  the last operand if no truthy value
// let firstName ="";
// let lastName ="";
// let nickName ="";
// alert (firstName || lastName || nickName || "Anonymous")

// short-circuit evaluation
// true || alert ("not printed");
// false || alert ("printed");


// AND (&&) OPERATOR
    // alert (true && true);
    // alert (true && false);
    // alert (false && true);
    // alert (false && false);

// let hour = 12;
// let minute = 30;
// if (hour == 12 && minute == 30) {
//     alert("the time is 12:30");
// }
// if all operand are false,returns the first falsy and ignore other value or
// the last operand if no falsy value 
// alert(1 && 2 && null && 3);


// NOT (!) OPERATOR
// alert(!true);
// alert(!+5);
































































































