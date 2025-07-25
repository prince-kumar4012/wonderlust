const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// 3: connect database 
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main ()
 .then(() =>{
    console.log("connect the DB");
 })
 .catch((err) =>{
    console.log(err);
 });

async function main() {
    await mongoose.connect(MONGO_URL);
};

// 1: create Function
const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "687a359a4660ad454714d9c4",}));
    await Listing.insertMany(initData.data);
    console.log("data was initilize");
};

initDB();
