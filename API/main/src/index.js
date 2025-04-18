const express = require("express");
const app = express();
const env = require("dotenv");
env.config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(process.env.ORACLE_PORT, ()=> {
    console.log(`ORACLE is waiting for your requests on ${process.env.ORACLE_PORT}`);
})
