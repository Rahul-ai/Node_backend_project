const express = require('express');
const router = express.Router();

const {prisma} = require('../Configuration/Database')


router.get("/", async(req, res)=>{ 
    res.send("hello Plasma");
})

module.exports = router;