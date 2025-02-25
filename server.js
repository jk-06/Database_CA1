const express=require("express");
const mongoose=require("mongoose");
require("dotenv").config;
const items=require("./models/items");
const restaurant=require("./models/restaurant");
const db=require("./db");

const app=express();
PORT=3000

app.use(express.json());

app.get("/", (req, res) => {
    return res.json("Welcome to our Restaurant");
})

app.listen(PORT, () => {
    console.log(`Local host running successfully on http://localhost.com:${PORT}`);
})

