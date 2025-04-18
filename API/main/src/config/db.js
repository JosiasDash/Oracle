const admin = require("firebase-admin");
const serviceAccount = require("../../oracle-firebase.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore();
console.log("Database connected");
module.exports = db;

// Schema
/*
microservice {
    url
    fetch_route
    category
    adapter_name
    id
}

*/