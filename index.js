const express = require('express');
// Set express function
const app = express();
// Set local port
const port = 3000;


// EJS allows or embedds js to be used in html
app.set('view engine', 'ejs');


// req (headers, parameters, body)
app.get('/', (req, res) => {
    // res (response express app sends once req is made)
    res.render('index', {firstName: 'Jeremy'});
});


app.get('/abc', (req, res) => {
    res.send('ABC!');
});


// this 'listens' for connections
app.listen(port, () => {
    console.log(`Hello World app listening on port ${port}`);
});