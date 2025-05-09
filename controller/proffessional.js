const {initDB} = require("../databaseConnect/connectdb")


const getDatabase = async (req, res, next)=>{
    const client = await initDB()
    const result = await client.db("portfolioDB").collection("portfolio").find().toArray()
    
        // res.setHeader("Content-Type", "Application/json")
        // res.status(200).json(result[0])
    console.log("Getting Database....")
    console.log(result)
    return result[0]
}

module.exports = { getDatabase}

