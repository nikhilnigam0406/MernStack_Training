// const fs = require('node:fs');
// const data = fs.readFileSync('./myReadme.txt');
// console.log(data)
// const obj = new Buffer.from('abcxyz');
// console.log(b);
// const b = new Buffer.from('abcxyz');
// console.log(b)
// b.write('other');
// console.log(b);

// const fs = require('fs');
// const data = fs.readlinkSync('./myReadme.txt',"10/04/2024");
// const fs = require('fs');

// fs.readFile('./myReadme.txt', { encoding: 'utf8' }, (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });
// const fs = require('fs');

// fs.readFile('./myReadme.txt', { encoding: 'utf8' }, (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });
//  http://localhost:1400
// const http = require('http://localhost:1400')
// const server = http.createServer((req, res)=>
// {console.log('Request recived');
// console.log(req, url);});
// server.listen(1400,()=>{
//     console.log("--------SERVER STATE")
// })

/*
const http = require('http');

const htmlTemplate = `
<!DOCTYPE 
    <html>
        <head>
            </head>
                <body>
                    _Product__Card__
                </body>
            </html>
`
const server = http.createdServer((req, res) => {
    console.log('Request Recived');
    console.log(req.url);
    res.writeHead(200, {
        'content-type': 'text/Html',
    })
    res.end('<h2>hello!</h2>');

});
server.listen(1400, () => {
    console.log('---------Submit------------');
})

*/

// const http = require('http');

// const htmlTemplate = `
// <!DOCTYPE html>
// <html lang="en">
//     <head>

//     </head> 
//     <body>
//         _Product__Card__
//     </body>
// </html>
// `;

// const cardTemplate = `
// <div class ='product card'>
//     <h3>____TITLE__</h3>
    
// `;

// const http = require('http');
// const fs= require('fs');

// const card1 = cardTemplate.replace('__TITLE__','Xiami Note 11 pro');
// const page = htmlTemplate.replace('_Product__Card__',card1);

// const data = fs.readFileSync('./data.json','url8');
// const dataobj = JSON.parse(data);



// const server = http.createServer((req, res) => {
//     console.log('Request Received');
//     console.log(req.url);
//     res.writeHead(200, {
//         'Content-Type': 'text/html', 
//     });
//     res.end(htmlTemplate); 
// });

// server.listen(1400, () => {
//     console.log('Server is running on port 1400');
// });


con