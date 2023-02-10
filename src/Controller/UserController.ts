import express , { Express, Request, Response } from "express";
import { GRepo } from "../GenericCntroller/GRepo";
const router = express.Router();

// const {db} = require('../Configuration/dbConfig')

const repo = new GRepo();

router.get("/", repo.fetchAll);
// router.get("/", async(req:Request, res:Response)=>{ 
//     try
//     {
//         const data = await db.user.findMany({
//             include: {
//                 posts: {select:{post:true}},
//             }
//         });
//         res.status(200).json(data);
//     }
//     catch(e){
//         console.log(e);
//     }
// });

module.exports = router;