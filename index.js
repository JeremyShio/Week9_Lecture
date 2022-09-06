const express = require('express');
// Set express function
const app = express();
// Set local port
const port = 3000;


// EJS allows or embedds js to be used in html (view engine)
app.set('view engine', 'ejs');


// uses 'logger' as middleware 
app.use(logger)


// req (headers, parameters, body)
app.get('/', (req, res) => {
    console.log(req.test);
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

];


app.get('/users', (req, res) => {
    res.render('users', { users });
});


app.param('id', getUser);


app.get('/users/:id', (req, res) => {
    // const id = req.params.id
    // for (let user of users) {
    //     if (user.id == id) {
    //         res.render('user', { user });
    //         return
    //     };
    // };
    // res.send({error: `User with id ${id} does not exist`});

    res.render('user', { user: req.user });
});


app.put('/users/:id', (req, res) => {
    res.send('Update User');
});


app.delete('/users/:id', (req, res) => {
    res.send('Delete User');
});


app.get('/test/:testId/:testName/:abc/:xyz', (req, res) => {
    console.log(req.params);
    res.send('Test');
});


// middleware Express function
function logger(req, res, next) {
    console.log(req.originalUrl)
    req.test = 123
    next();
};


function getUser(req, res, next, id) {
    let user;
    for (let u of users) {
        if (u.id == id) {
            req.user = u
        }
    }
    if (req.user) {
        next()
    } else {
        res.send({error: `No user with an id of ${id}`})
    }
};


// this 'listens' for connections
app.listen(port, () => {
    console.log(`Hello World app listening on port ${port}`);
});