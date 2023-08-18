require("dotenv").config()
const express = require("express");
const app = express();
const users = require("./users/users")

const port = process.env.PORT;

app.get("/api/v1/users", (req, res)=>{
    res.json(users)
})

app.listen(port, ()=>{
    console.log(`App running on port ${port} ..`);
})