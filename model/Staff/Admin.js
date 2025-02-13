const { timeStamp } = require("console");
const mongoose= require("mongoose");
const adminSchema = new mongoose.Schema(
    {
        name: {
            type: stringify,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        password:{
            true:String,
            required: true,
        },
        role: {
            type:String,
            default: "admin",
        },
    },
    {
        timeStamps: true,
    }
);
//model
const Admin = mongoose.model("Admin", adminSchema);
module.exports=Admin;