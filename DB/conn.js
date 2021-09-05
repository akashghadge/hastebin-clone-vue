// database connections
const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;
mongoose.connect(uri || "mongodb://localhost/hastebin-clone", {
    useNewUrlParser: true, useUnifiedTopology: true
}).then((data) => {
    console.log("DB is connected..");
}).catch((err) => {
    console.log(err);
});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Database connected sucessfully");
})


