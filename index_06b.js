            // NODE JAVASCRIPT

/*
Node-package-manage.js
notion (sir k notes)
installing package.json
*/
// --------------------------------------------------------------
// npm install figlet

/*
// https://dev.hsrn.nyu.edu/si2073/audio-example/-
/blob/39a33a15a4a8fbc7a0d4e130abadd5bc847e2e18/node_modules/figlet/README.md
var figlet = require('figlet');

figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

*/
// fetch API
/*
--------------------------------------
*/

/* 
Fun()
{
    const pr = await fetch('');
    const data = await pr.json();
    console.log(data);
}
Fun();
----------------------------
*/

/*
console.log('start');
async function getApi() {
    
console.log('start');
    const pr = await fetch('https://api.github.com/users/deepak3440');
    const data = await pr.json();
    console.log(data);
    console.log('end');
}
getApi();

*/
console.log('start');
async function callApi(){
    const pr1 = new Promise((res, rej)=>{
        console.log('Promise...');
        
        console.log('promise 1 completed');
    }
)}
callApi();

