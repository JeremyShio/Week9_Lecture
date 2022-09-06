const express = require('express');
// Set express function
const app = express();
// Set local port
const port = 3000;


// EJS allows or embedds js to be used in html (view engine)
app.set('view engine', 'ejs');


// req (headers, parameters, body)
app.get('/', (req, res) => {
    // res (response express app sends once req is made)
    res.render('index', {firstName: 'Jeremy', lastName: 'Shiotani'});
});


let users = [
    {
        id: 1,
        username: 'Jeremy',
        age: 27,
        color: 'blue'
    },
    {
        id: 2,
        username: 'Sarah',
        age: 28,
        color: 'pink'
    },
    {
        id: 3,
        username: 'UhhIdk',
        age: 29,
        color: 'unknown'
    }

]


app.get('/users', (req, res) => {
    res.render('users', { users });
});


app.get('/users/:id', (req, res) => {

    const id = req.params.id
    for (let user of users) {
        if (user.id == id) {
            res.render('user', { user })
        }
    }
    res.send({error: `User with id ${id} does not exist`})
});


// this 'listens' for connections
app.listen(port, () => {
    console.log(`Hello World app listening on port ${port}`);
});