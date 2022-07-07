import app from "./app";
import './connectors/database'

const port = 8080;

app.listen(port);

console.log('Server on port ', port);

// const express = require('express');
// const app = express();
// const port = 8080;
// require('./dao/database');

// app.use(require('./routes/routes'))

// app.listen(port);

// console.log("Server on port ", port);