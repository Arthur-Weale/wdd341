const express = require("express")
const router = express.Router()
const {getDatabase} = require("../controller/professional")

router.get("/professional", async(req, res)=>{
    try{
        const response = await getDatabase()
        console.log(response)
        res.send(response)
    }catch(e){
        console.error("Error fetching data", e)
        res.status(500).send("Something went wrong")
    }    
})

module.exports = router