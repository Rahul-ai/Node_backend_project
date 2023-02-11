import express , { Express, Request, Response } from "express";
import { db } from "../Configuration/dbConfig";
import { User } from "../entity/User";
import { GRepo } from "../GenericCntroller/GRepo";
const router = express.Router();

// const {db} = require('../Configuration/dbConfig')

const repo = new GRepo();

router.get("/", repo.fetchAll);

// router.get("/", async(req:Request, res:Response)=>{ 
//     try
//     {
//         res.status(200).json(await db.manager.find(User))
//     }
//     catch(e){
//         console.log(e);
//     }
// });

module.exports = router;