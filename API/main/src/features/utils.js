const Redis = require("ioredis");
const db = require("../config/db");
const axios = require("axios");
const keys = require("./key");
const adapters = require("./adapter");
const Fuse = require("fuse.js");

const redis = new Redis();

async function FetchFromSource(microservice) {
    let url = microservice["url"] + microservice["fetch_route"];
    if (microservice["key"]) {
        url += `?key=${keys[microservice["adapter"]]}`;
    }
    try {
        const response = await axios.get(url);
        console.log(`Get from source ${microservice.url}:`);
        console.log(adapters[microservice.adapter](response.data))
        return adapters[microservice.adapter](response.data);
    }
    catch (error) {
        console.error(`Error when fetching data from ${url}`);
        console.error(error);
    }
}

async function FetchData() {
    const ref = db.collection("micro-service");
    const snapshot = await ref.get();
    let result = {};
    
    for (const micro of snapshot.docs) {
        const data = micro.data();
        const cachedData = await redis.get(data["adapter"]);
        // Fetch from source if there is no source and cache
        if (!cachedData) {
            console.log("Fetch from source");
            result[data.adapter] = await FetchFromSource(data);
            await redis.set(data.adapter, JSON.stringify(result[data.adapter]), 'EX', 3000);
        } else {
            // get data from cache
            console.log("From redis");
            result[data.adapter] = JSON.parse(cachedData);
        }
    }
    return result;
}

function Search(query, result) {
    const option = {
        keys: ["name"],
    }
    let search_result = [];
    console.log(`Query is ${query}`);
    Object.keys(result).forEach((key)=> {
        const fuse = new Fuse(result[key], option);
        let res = fuse.search(query);
        res.map((value, index)=> {
            res[index] = value.item;
        })
        search_result.push(...res);
    })
    return search_result;
}

module.exports = {
    FetchData,
    Search
}
