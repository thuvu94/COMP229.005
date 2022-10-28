let atlasDB = "mongodb+srv://thanhthu:Su-8121994@clustercomp229005.wb2fyix.mongodb.net/business?retryWrites=true&w=majority";

let mongoose = require('mongoose');

module.exports = function()
{
    //Connect to the database
    mongoose.connect(atlasDB);

    let mongodb = mongoose.connection;
    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('==== Connected to MongoDB ====');
    });

    return mongodb;
}