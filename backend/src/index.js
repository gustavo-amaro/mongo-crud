global.db = require('./db');
const express = require('express');
const cors = require("cors");
const routes = require('./routes');

function startServer() {
    const app = express();
    const port = 3333;

    app.use(cors());
    app.use(express.json());
    app.use(routes);
    app.listen(port);

    console.log('app running on port '+port);
}

startServer();