/*
Call by function
Event Loop, call stack, Queue, microtaskQueue

The Event Loop, call stack, queue, and microtask queue are all important concepts in JavaScript.
They work together to allow JavaScript to execute code asynchronously,
which means that it can run multiple tasks at the same time.
The Event Loop is a mechanism that monitors the call stack and the queue.
I
f the call stack is empty, the Event Loop takes the first task from the queue and pushes it to the call stack.
The call stack is a stack of functions that are currently being executed.
When a function is called, it is pushed onto the call stack.When the function returns,
it is popped off the call stack.

The queue is a list of tasks that are waiting to be executed.When a task is added to the queue,
it is placed at the end of the list.The Event Loop takes tasks from the queue and pushes them onto the call stack in the order that they were added to the queue.

The microtask queue is a special type of queue that is used for tasks that need to be executed immediately.When a task is added to the microtask queue, it is placed at the beginning of the queue.The Event Loop will execute all of the tasks in the microtask queue before it takes any tasks from the regular queue.
The Event Loop, call stack, queue, and microtask queue work together to allow JavaScript to 
execute code asynchronously.This means that JavaScript can run multiple tasks at the same time,
even if some of those tasks are waiting for input from the user or for 
a network request to complete. */

// setTimeout(() => { console.log('Timeout 1..') }, 20000);
// console.log('start');
// setTimeout(() => { console.log('Timeout 2..') }, 20000);
// console.log('intermediate');
// console.log('end');

/*
A Promise is in one of these states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
*/

/* Why need Promises*/
// createOrder()
// makePayment()
/* 
function createOder(x, fn) {
    console.log(x);
    // Inversion of Control
    setTimeout(() => { fn('A445') }, 1000);

    fn('A445');

}

function makePayment(oderID) {
    console.log(oderID);
}
createOder('soap', makePayment);
*/

// Promise--> If self User Defined Promise Defination
/*
    const pr = new Promise((resolve, reject) => {

    //Logic
    if (true) {
        setTimeout(() => {
            resolve('Payment Successfull Done');
        }, 10000)

    } else {
     
        reject('failure'); 
    }
});

pr.then((res) => {
 
   console.log(res); //Undefined-OutPut Show
}).catch((err)=>{    //error
    console.log(err);
})
console.log(pr);
*/


//Javascript visualizer 9000
/*
setTimeout(function abc(){
    console.log('I am one');
},0);

const pr = new Promise((res, re)=>{
    setTimeout(()=>{
        res('done'),0
    })
});
pr.then(function b(res){
    console.log("promised completed",res);
});
setTimeout(function xyz(){
    console.log('I am two');
});
*/
// --------------------------------------------------------------------------------------------
// More javaScript Function
/*
Map method
const arr = [10,20,51,47];
const ans = arr.forEach((a)=>{
    console.log(a);
    return a*2;
});
const ans2= [45,57,87,45,6,44,41];
const ans3 = arr.map(a=>a**2);
console.log(ans3);



const arr = [10,4,45,57,12];
const ans =arr.push(92);
console.log(ans);
console.log(arr);
console.log();

const arr = [10,22,5,14,2 ];
const ans = arr.filter((a)=>{
    if(a>200)
       return true;
    else
        return false;
});
console.log(arr);
console.log(ans);


const arr = [
    'Iraq',
    'usa',
    'Kanpur',
    'Ranchi',
    'Delhi',
    'Nanital',
    'RaniGanj',
    'Chennia',
    'India'
]
const ans = arr.filter((s) => {
    if (s.includes('i')) {
        return true;
    } else {
        return false;
    }
});
console.log(ans);

// used with toLowerCase, toUpperCase
const arr1 = [
    'kunnur, IndiA',
    'udiaPur, iNdiA',
    'Kanpur-INdia',
    'Ranchi,InDiA',
    'Delhi,indIA',
    'Nanital,India',
    'RaniGanj, India',
    'Chennia',
    'India'
]
const ans2 = arr1.filter((z) =>
    z.toUpperCase().includes('india')
);
console.log(ans2);


// Reduce Function-->Addition Complete Array

const arr = [10,24,69];
const ans = arr.reduce((total,curr,c,d)=>{
    console.log(total,curr,c,d);
    return total+curr;
});

console.log(ans);
// --------------------
const arr3 = ['ab','cd','xy','z'];
const ans3 = arr3.reduce((total,curr,c,d)=>{
    console.log(total,curr,c,d);
    return total+curr;
});
console.log(ans3);

*/
//  ---------------------------------------------------E-S 6 ----------------------------------------------------------
// change directory: cd FolderName Another FolderName
// node index_06.js

function sum(a,b){
    console.log(a+b);
}

function sub(a,b){
    console.log(a-b);
}

module.exports = {
    fn1: sum,
    fn2: sub,
};

/*
Multiple function export karna another file
module.exports = {
    anyFunName_1: function_Name, 
        Note* if function not give pair then by default key will be consider as a function
    
    anyFunName_2: function_Name
        /* 'name' : 'Nikhil'; similar to fxn
};
const Obj = require('file_name');
Obj.fn1(arugment);
Obj.fn2(argument);


module.exports = function_name;
const sum = require('filename');
sum(arguments);

Object Destructuring

const {sum, name} = require("./filename");
sum(arguments);
*/


