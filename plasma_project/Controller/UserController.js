const express = require('express');
const router = express.Router();

const {db} = require('../Configuration/dbConfig')

router.get("/", async(req, res)=>{ 
    try
    {
        const data = await db.user.findMany();
        res.status(200).json(data);
    }
    catch(e){
        console.log(e);
    }
});

module.exports = router;