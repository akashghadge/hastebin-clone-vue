const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CodeSchema = new Schema
    ({
        text: {
            type: String,
            required: true
        }
    })


const Code = mongoose.model("Code", CodeSchema);
module.exports = Code;