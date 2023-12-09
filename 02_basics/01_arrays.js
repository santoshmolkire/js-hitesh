const numbers=[65,84,3,4,8,];// ararays declaration
//console.log(numbers);
//2nd way of arrays declaration
const heros=new Array("shaktiman","aryaman","botman","ironman","spiderman");
//console.log(heros);

const array=[4,5,6,3];
//array.push(8);//add element to last in array
//console.log(array);
//array.pop();//remove last element of array
//console.log(array);
// array.unshift(7);//add first element in array not good it will shit all elements in array
// array.shift();//remove first element in array
// console.log(array);

//console.log(array.includes(9));//true or false if present gives true else false

//slice and splice
/* Slice-> it gives new array which we provided index excludes last index dont change in original array
    Splice->it gives new array which we provided index include last index change in original array
*/

const myArr=[0,1,2,3,4,5];
const sliceArr=myArr.slice(1,4);
console.log(sliceArr);
console.log(myArr);

const spliceArr=myArr.splice(1,4);
console.log(spliceArr);//it creats new arr and modified original array i.e it will remove element 
//from original which we have provided in splice range
console.log(myArr);