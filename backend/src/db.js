const mongoClient = require("mongodb").MongoClient;

function findAll(callback){  
    global.conn.collection("products").find({}).toArray(callback);
}

mongoClient.connect("mongodb://localhost", { useUnifiedTopology: true })
            .then(conn => global.conn = conn.db("test"))
            .catch(err => console.log(err))
 
module.exports = { findAll }