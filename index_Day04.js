// String default is not write in Object
// let a = new String("Hello")
// let b = "Hello"

// if(a==b){
//     console.log("yes")
// }else{
//     console.log("No")
// }
// const obj = {
//     'name':'Nikhil',
//     'lastname': 'Nigam'
// }
// // document.write(obj)
// console.log(obj)

// Cannot reassign Const Object
// const obj = {
//     'name':'Nikhil',
//     'lastname': 'Nigam'
// }
// obj.age = 21
// console.log(obj)

// let arr = [1,3,4,62,3,7]
// console.log(arr)
// arr[20] = 4
// console.log(arr)

// let arr = [0,1,3,4,62,3,7]
// arr.push(2)
// console.log(arr)
// arr.pop(1)
// console.log(arr)
// console.log(Array.isArray(arr))

// checkIfobject([1,2,3,4,5,60])
// function checkIfobject(x){
//     if(Array.isArray(x)){
//         console.log('n');
//     }
//     else if(Array.isArray(x)=="object"){
//         console.log('y')
//     }
//     else{
//         console.log('n');
//     }
// }

// const arr = [ 'name', 2,'h'];
// const obj = {
//     'name': 'nikhil',
//     age : 20,51:'else',
//     20:"mca"
// }
// for(let i of arr){
//     console.log(i)
// }
// not for obj

// const arr = [ 'name', 12,'h'];
// for(let i in arr){
//     console.log(i)
// }

// const obj = {
//     'n  ame': 'nikhil',
//     age : 20,51:'else',
//     20:"mca"
// }
// for(let i in obj){
//     console.log(i)
    
// }
// -----------------------------------------------------------------------------------------------------------------
// Document Object model- Property learn from Online
// console.log(window)
// console.log(innerHeight)
// console.log(window.innerHeight)
// console.log(window.document)
// console.log(window.document)

// const res = document.getElementById("ht1");
// res['innerText'] = "Hello world";
// console.log(res)



// const ne = document.createElement("h3");
// ne.innerText = "DynamicText";

// document.body.appendChid(ne);


// const ne = document.createElement("h3");
// ne.innerText = "DynamicText";

// const firstDiv = document.getElementById("yourDivId");
// firstDiv.appendChild(ne);

// ----------------------------------------------------------------

// const div = 
//  document.querySelectorAll('div');
//  console.log(res);
//  res.remove();


// Remove Child Property 
// const res = 
//  nt = document.querySelectorAll('div');
//  const c = 
// document.querySelector('p');
// res.removeChild(c)

// --------------------------------------------------------------------------------->>>
// Events In JaVaScript

// function getInfo(event){
//      const d = document.querySelector("div");
//     //  const el = d0cument.querySelector("p");

//      d.prepend("My name is Nikhil");
// }

// --------------------------------------------------------------------------------------

// const firstNameChange = ()=>{
//     console.log(e);
// }

// const firstNameChange = ()=>{
//     const val = e.target.value;
//     if(val.length>3){
//         console.log('correct')
//     }
// }

// function submitForm(e){
//     e.preventDefault(); 
//     console.log(e);
// }
// function submitForm(e){
//     e.preventDefault();
//     const t = e.target();
//     for(let i=0; i<t.lenght; i++){
//        const ty = t[i].type;
//        const yl = t[i].value;
//        console.log(ty)
//     }
// }

// function submitForm(e){
//     e.preventDefault(){
//         const t = e.target;
//         const res = {
//             hobbies:[],
//         };
//         for(let i=0;i<t.length;i++){
//         const ty= t[i0.type];
//         if((ty!='submit')){

//             const vl = t[i].checked;
//             const nm = t[i].checked;
//             if(ty=='checkbo' && t[i].checked){
//                 res.hobbies.push(vl);
//             }
//             if(ty=='checkbox' && t[i.checked]){
//                 res.hobbies.push(vl);
//             }
//             if(ty!='checkbox'){
//                 res[nm] =vl;
//             }
//         }

//         {

//         }
//     }  
// }
// console.log(res);
// }

// function sum(a,b, fun){
//     const ans = a+b;
//     fun(ans);
// }
// function print(x){
//     console.log(x);
// }
// sum(3,4,print);

// ----------------------------------------------------------------------------------------