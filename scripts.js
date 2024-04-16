// const express = require('express');
// const fs = require('fs');
// const app = express();


// Syncs -> GET
// app.get('/api/products', (req, res) => {
//     const data = fs.readFileSync('./data.json', 'utf8');
//     const arr = JSON.parse(data);
//     res.json({
//         status: 'success',
//         results: arr.length,
//         data: arr 
//     });
// });

// app.listen(1400, () => {
//     console.log('Server is running on port 1400');
// });

// async function
// app.get('/api/products',async (req, res) => {
//     const data = await fsPromise.readline('./data.json', 'utf8');
//     const arr = JSON.parse(data);
//     res.json({
//         status: 'success',
//         results: arr.length,
//         data: arr 
//     });
// });

const express = require('express');
const fs = require('fs');

// Import fs module and assign its promises API to fsPromises
const fsPromises = fs.promises; 


const app = express();

app.use(express.json());

app.post('/api/products', async (req, res) => {
    const data = req.body;

    try {
        const db = await fsPromises.readFile("./data.json");
        const arr = JSON.parse(db);
        const len = arr.length;

        if (len === 0) {
            data.id = 1;
            arr.push(data);
        } else {
            const newProduct = data;
            newProduct.id = arr[len - 1].id + 1;
            arr.push(newProduct);
        }

        await fsPromises.writeFile("./data.json", JSON.stringify(arr)); // Write updated data back to the file system

        res.status(200).send('Work in progress, smknksnk');
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(1300, () => {
    console.log('Server is running on port 1300');
});

/*
POST: 201 (Created), 404 (Not Found), 409 (Conflict)
GET: 200 (OK), 404 (Not Found)
PUT: 405 (Method Not Allowed), 200 (OK), 204 (No Content), 404 (Not Found)
PATCH: 405 (Method Not Allowed), 200 (OK), 204 (No Content), 404 (Not Found

*/
// app.put('/api/products/:id',async (req, res)=>{
//     const arr = JSON.parse(await fsPromises.readFile("./dat.json"));
//     res.send("work in progree...");
//     const reqId = req.body;
//     data.id = reqID;
//     const newArr = arr.map((elem))
// })



