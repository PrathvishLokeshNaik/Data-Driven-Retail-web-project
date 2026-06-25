const mongoose =
require("mongoose");

const analysisSchema =
new mongoose.Schema({

userId:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

location:String,

competition:Object,

climate:Object,

transport:Object,

recommendation:Object,

roi:Object,

createdAt:{
type:Date,
default:Date.now
}

});

module.exports =
mongoose.model(
"Analysis",
analysisSchema
);