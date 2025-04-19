const express = require("express");
const app = express();
const env = require("dotenv");
env.config();
const cors = require("cors");
const {FetchData, Search} = require("./features/utils");

app.use(cors({origin: '*'}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/categories", (req, res)=> {
    res.status(200).json({
        categories: ["Video games"]
    })
})

/*
* @brief A query to search some video game
* @steps
*   - Fetch all data (cache or not)
*   - use fuse to search
*/
app.get("/search", async (req, res)=> {
    const {query} = req.query;
    let result = await FetchData();
    const search_result = Search(query, result);
    console.log("GET 200 /search");
    res.status(200).json({
        "result": search_result,
    })
})

app.listen(process.env.ORACLE_PORT, ()=> {
    console.log(`ORACLE is waiting for your requests on ${process.env.ORACLE_PORT}`);
})
