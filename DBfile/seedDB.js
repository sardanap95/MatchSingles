const mongoose = require("mongoose");
const db = require("models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/userInfo"
);

const userSeed = [
    {

    }
];

db.Profile.remove({})
.then(() => db.Profile.collection.insertMany(userSeed))
.then(data => {
    console.log(data.result.n + " records inserted");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});