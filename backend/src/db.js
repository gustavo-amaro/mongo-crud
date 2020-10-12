const mongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectId;

function findAll(callback){  
    global.conn.collection("products").find({}).toArray(callback);
}

function findOne(id, callback){  
    global.conn.collection("products").find(new ObjectId(id)).toArray(callback);
}

function insert(product, callback){
    global.conn.collection('products').insertOne(product, callback);
}

function update(id, product, callback){
    global.conn.collection("products").updateOne({_id: new ObjectId(id)}, {$set: product}, callback);
}

function deleteOne(id, callback){
    global.conn.collection("products").deleteOne({_id: new ObjectId(id)}, callback);
}

mongoClient.connect("mongodb://localhost", { useUnifiedTopology: true })
            .then(conn => global.conn = conn.db("test"))
            .catch(err => console.log(err))
 
module.exports = { findAll, insert, findOne, update, deleteOne }