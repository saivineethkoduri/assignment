//Dependencies
const express = require('express');
const bodyParser = require("body-parser");
//File imports
const connection = require('./dbconnection');
const router = require('./router/router');

const app = express();
const port = 3000;

//Body parser configurations for post request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);
app.get('/api', (req, res)=> {
    const apiVersion = {
        app: "players record",
        version: "1.0.0"
    }
    res.send(apiVersion);
});
//Database connection
connection();
//Port assignment
app.listen(port, ()=> {
    console.log(`server started and running at ${port}`);
});