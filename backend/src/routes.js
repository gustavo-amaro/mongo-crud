const express = require('express');
const routes = express.Router();

routes.get('/products', (req, res)=>{
    global.db.findAll((e, docs) => {
        if(e) { return console.log(e); }
        res.json({ title: 'Lista de Clientes', docs: docs });
    })
});


module.exports = routes;