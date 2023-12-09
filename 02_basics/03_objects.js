//objects literals

const mySymbol=Symbol("key1");


const user={

    name:"santy",
    [mySymbol]:"mykey",
    age:30,
    email:"ss@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["mon","sat"]

};

console.log(user);
console.log(user.email);
console.log(user["name"]);
console.log(user[mySymbol]);

user.email="ssm@yahoo.com";
console.log(user);
//if we dont want change obj user then freeze it

//Object.freeze(user);
user.email="ssss@hotmail.com";

console.log(user);

user.greeting=function(){
    console.log("hello js");
}

user.greeting1=function(){
    console.log(`hi every one my email is ${this.email} thanks`);
}
console.log(user.greeting());
console.log(user.greeting1());