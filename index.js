//mongoose integration
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/books-store', {useNewUrlParser: true, useUnifiedTopology: true});

//csvtojson
const csvFilePath='./game.csv'
const csv=require('csvtojson')


//get schema
const Games = require('./model/Game')


const main = async() => {
    const jsonArray=await csv().fromFile(csvFilePath);

    try{
        await Games.insertMany(jsonArray);
        console.log('done');
    }
    catch(e){
        console.log(e);
    }
    const m = await Games.find();
    console.log(m);
    mongoose.connection.close();
    console.log("--------------done2----------------");
}

main();