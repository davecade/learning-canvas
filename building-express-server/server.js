const express = require('express')

const app = express();


app.get('/', (req, res) => {
    res.send("Welcome to my page")
})

app.get('/profile', (req, res) => {
    const user = {
        name: "Dave",
        position: "Junior Developer",
        age: "35"
    }

    res.send(user)
})



app.listen(3000)