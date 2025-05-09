const {MongoClient} = require("mongodb")
const dotenv = require("dotenv")
dotenv.config()

const initDB = async function(){
    const client = new MongoClient(process.env.mongoUrl)
    console.log("Client is initialised")

    try{
        await client.connect()
        console.log("Handshake succesful")
        return client;
    }catch(e){
        console.error(e)
    }
}

//initDB().catch(console.error)

module.exports = {initDB}