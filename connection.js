const {MongoClient} = require("mongodb");


async function main(){
    const uri = mongoUrl

    const client = new MongoClient(uri)

    console.log("🚀 Script started");
    try{
        await client.connect()
        await listDatabases(client)
        await createListing(client, {
            name: "Arthur",
            age: 24,
            grade: 1
        })
        await createListings(client,[
            { "name": "George Hall", "age": 14, "grade": "8th" },
            { "name": "Hannah Adams", "age": 13, "grade": "7th" },
            { "name": "Ian Thomas", "age": 10, "grade": "4th" },
            { "name": "Julia Moore", "age": 12, "grade": "6th" },
            { "name": "Kevin White", "age": 11, "grade": "5th" },
            { "name": "Lily Clark", "age": 13, "grade": "7th" },
            { "name": "Mason Lewis", "age": 14, "grade": "8th" },
            { "name": "Nina Walker", "age": 10, "grade": "4th" },
            { "name": "Oliver Young", "age": 12, "grade": "6th" },
            { "name": "Paula King", "age": 11, "grade": "5th" },
            { "name": "Quincy Wright", "age": 13, "grade": "7th" },
            { "name": "Rachel Scott", "age": 14, "grade": "8th" },
            { "name": "Sam Green", "age": 10, "grade": "4th" },
            { "name": "Tina Baker", "age": 12, "grade": "6th" }
        ] )
        await find(client, "Arthur")
        //await updateGrade(client, {name: "Arthur"},{$set:{grade: 12}})
    }
    catch (e){
        console.error(e)
    }
    finally{
        await client.close();
    }
}

main().catch(console.error);

//CREATE in Crud ### For one item
async function createListing(client, newListing){
    const results = await client.db("schoolDB").collection("students").insertOne(newListing)
    console.log(`New listing id is ${results.insertedId}`)
}


//For many inserts creations
async function createListings(client, newlistings){
    const results = await client.db("schoolDB").collection("students").insertMany(newlistings);
    
    for(let id in results.insertedIds){
        console.log(`New inserted id ${results.insertedIds[id]}`)
    }
}


//READ in cRud
async function find(client, toBeFound){
    const result = await client.db("schoolDB").collection("students").findOne({name: toBeFound})
    console.log(result);
}

//UPDATE in crUd
async function updateGrade(client, filter,userToBeUpdated){
    const result = await client.db("schoolDB").collection("students").updateOne(filter, userToBeUpdated)
    console.log(result);
}

async function listDatabases(client){
    const databaseList = await client.db().admin().listDatabases();
    console.log("Here is a list of databases: ")
    databaseList.databases.forEach(db => {
        console.log(`${db.name}`)
    });
}