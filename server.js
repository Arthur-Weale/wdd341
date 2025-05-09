const express = require("express");
const app = express();
const mainRoute = require("./routes/mainRoute")

app.use(express.json())
app.use("/", mainRoute)

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("Your App started at " + port);
})

