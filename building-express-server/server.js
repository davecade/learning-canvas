const express = require('express')

const app = express();

//-- MIDDLEWARE
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use((req, res, next) => {
    console.log("<h1> HelloOOO </h1>")
    next()
})


//-- ROUTES
app.get('/', (req, res) => {
    res.send("Welcome to my page")
})

app.post('/profile', (req, res) => {
    console.log(req.body)
    const user = {
        name: "Dave",
        position: "Junior Developer",
        age: "35"
    }

    res.send(user)
})



app.listen(3000)