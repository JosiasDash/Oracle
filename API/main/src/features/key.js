const env = require("dotenv");
env.config();

const keys = {
    rawg: process.env.RAWG_API_KEY,
}

module.exports = keys;