//  Callback value example
// let arr = [3, 4, 5, 87, 5, 8, 5]

// function printPrety(elem) {
//     console.log(': ', elem);
// }

// forEach

// function printArray(arr) {
//     // Using forEach loop
//     arr.forEach(function(elem) {
//         console.log(':', elem);
//     });
// }

// arrow fxn
// function printArray(arr) {
//     // Using forEach loop
//     arr.forEach((elem) => {
//         console.log(':', elem);
//     });
// }
// printArray(arr);

// Map Method
// -----------------------------------------------------------------------
// Ashynchronus Nature in Js

// Js is a synchronus, single threaded language
// STACK--> LIFO

// SetTimeOut
// const myTimeout = setTimeout(myGreeting, 5000);

// function myGreeting() {
// let con= "Happy Birthday!"
// }

// function myStopFunction() {
//   clearTimeout(con);
// }

// function print(elem){
//    console.log('hello')

// }
// setTimeout(print,10000)

// console.log('GEC Start\n');
// function print(){
//     console.log('Start');
//     let ans = 2+3;
//     console.log(ans);
//     console.log('End');
// }
// setTimeout(print,10000);
// console.log('GEC End');
// function print()
// {
//     console.log("Help")
// }
// const btn = document.getElementById('btn')
// btn.addEventListener = ("click", print);

// console.log('Start')

// Promise- return promise
// const req = fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
//     .then(res => res.json())
//     .then((data) => console.log(data));

// .then(res => res.json())
// const res = req.then(res =>res.json())
// res.then((data)=>console.log(data));
// console.log(req)



// Call API AND Render UI 
console.log("...APP Started...");

function callApp() {
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=1fb5e006689343749f05eab91af058e7")
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            renderUI(data); // Call renderUI function with the fetched data
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

callApp();

function renderUI(data) {
    const articles = data.articles;
    const root = document.getElementById("root");

    const ar = articles[2];
    console.log(ar);

    // for(let i =0;i<articles[i];i++){
    //     const ar  = articles[i];
    const div = document.createElement("div");
    div.setAttribute("class", "news-card");
    const h3 = document.createElement("h3");
    h3.innerText = ar.title;
    div.appendChild(h3);
    root.appendChild(div);



    // for (let i = 0; i < articles.createElement("div"); i++) {
    //     const ar = articles[i];
    //     const div = document.createElement("div");
    //     div.setAttribute("class", "news-card");
    //     const h3 = document.createElement("h3");
    //     h3.innerText = ae.title;
    //     div.appendChild(h3);

    //     const img = document.createElement("img");
    //     img.src = ar.urlToImage;
    //     div.appendChild(h3);
    //     root.appendChild(div);
    // }


}


// console.log("...APP Started...");

// function callApp() {
//     fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=1fb5e006689343749f05eab91af058e7")
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             renderUI(data); // Call renderUI function with the fetched data
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// }

// callApp();

// function renderUI(data) {
//     const root = document.getElementById("root");
//
//     const root = document.getElementById("root");
//     const div = document.createElement("div");
//     div.innerText = 'card';
//     root.appendChild(div);

//     console.log(articles);
//     const ar = articles[0];
//     console.log(ar);
// }




// for(let i =0;i<articles[i];i++){
//     const af
// }



// function renderUI() {
//     const root = document.getElementById("root");
//     if (root) { // Check if the root element exists
//         const div = document.createElement("div");
//         div.innerText = 'card';
//         root.appendChild(div);
//     } else {
//         console.error("Root element not found.");
//     }
// }

// renderUI();


