const express = require('express');
const routes = express.Router();

routes.get('/products', (req, res)=>{
    global.db.findAll((e, docs) => {
        if(e) { return console.log(e); }
        res.json({ products: docs });
    })
});

routes.get('/products/:id', (req, res)=>{
    const id = req.params.id;
    global.db.findOne(id, (e, products)=>{
        if(e) return console.log(e);

        res.json({ product: products[0] });
    })
});

routes.post('/products', (req, res)=>{
    const product = req.body.product;
    global.db.insert(product, (e, result)=>{
        if(e) return console.log(e);
        res.json({ result });
    })
});

routes.put('/products/:id', (req, res)=>{
    const product = req.body.product;
    const id = req.params.id;

    global.db.update(id, product, (e, result)=>{
        if(e) return console.log(e);

        res.json({ result });
    })
});

routes.delete('/products/:id', (req, res)=>{
    const id = req.params.id;

    global.db.deleteOne(id, (e, result)=>{
        if(e) return res.json({error: e});

        res.json({ result })
    })
})


module.exports = routes;