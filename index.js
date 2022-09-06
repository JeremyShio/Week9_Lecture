const express = require('express');
// Set express function
const app = express();
// Set local port
const port = 3000;


// req (headers, parameters, body)
// res (response express app sends once req is made)
app.get('/', (req, res) => {
    res.send('Hello World');
});


// 
app.get('/abc', (req, res) => {
    res.send('ABC!');
});


// 
app.listen(port, () => {
    console.log(`Hello World app listening on port ${port}`);
});