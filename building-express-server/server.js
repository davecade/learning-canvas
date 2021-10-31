const express = require('express')

const app = express();

//-- MIDDLEWARE
app.use(express.static(__dirname + '/public'))

app.listen(3000)