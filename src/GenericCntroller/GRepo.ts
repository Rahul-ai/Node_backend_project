import { Express, Request, Response } from "express";
import { User } from "../entity/User";
import { BaseEntity } from "typeorm";
import { BaseInterface } from "../EntityInterfaces/BaseInterface";
import { Post } from "../entity/Post";
const {db} = require('../Configuration/dbConfig');

export class GRepo
{
   public async fetchAll(req: Request, res: Response) {
      try {
         const data = await db.manager.find(User)
         res.status(200).json(data);
      }
      catch (e) {
         res.status(500).json(e);
      }
   }
}