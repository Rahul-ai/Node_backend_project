import express , { Express, Request, Response } from "express";
const {db} = require('../Configuration/dbConfig');

export class GRepo {
     public async fetchAll(req:Request,res:Response){
        try
        {
            const data = await db.user.findMany({
                include: {
                    posts: {select:{post:true}},
                }
            });
            res.status(200).json(data);
        }
        catch(e){
            console.log(e);
        }
     }
}