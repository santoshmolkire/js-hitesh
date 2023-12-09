//function declaration

function f1(){
    //console.log("hi everyone");
}

f1();

function addition(num1, num2){
    //console.log(num1+num2);
}

addition(4,5);


function add1(num1,num2){
    let sum=num1+num2;
    return sum;
}

//console.log(add1(7,8));

function add2(num1,num2){
    return num1+num2;
}

let result=add2(6,7);
//console.log(result);

// function userLoginMsg(username){
//     return `${username} just logged in`;

// }
function userLoginMsg(username){
    //if(username===undefined){
    if(!username){
        return "plz enter username";
    }
    return `${username} just logged in`;

}
//console.log(userLoginMsg("ssm"));
console.log(userLoginMsg());// if we dont pass arguement//undefined just logged in

//by default sam value if we dont pass arguements if we pass it override sam
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

//rest parameter and spread operator
function calculateCartValue(...number){
    return number;
}

console.log(calculateCartValue(900));
console.log(calculateCartValue(900,6999,800));

const user = {
    username:"sssm",
    password:90857
}

function userMsg(user){
let str= `my user id is ${user.username} and pwd is ${user.password}`;
return str;
}

console.log(userMsg(user));
console.log({
    username:"sssm",
    password:90857
});

const myNewArr=[899,800,300,100];

function secondValueOfArr(getArray){
    return myNewArr[2];
}

console.log(secondValueOfArr(myNewArr));
console.log(secondValueOfArr([899,800,300,100]));