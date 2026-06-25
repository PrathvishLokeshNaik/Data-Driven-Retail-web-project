const express = require("express");

const router = express.Router();

router.post("/analyze",async(req,res)=>{

const { location } = req.body;

res.json({

location,

totalShops:0,

categories:{},

message:
"Location analysis coming in Phase 2"

});

});

module.exports =
router;