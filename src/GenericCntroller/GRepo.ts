import { Express, Request, Response } from "express";
import { User } from "../entity/User";
import {AppDataSource} from '../data-source';
import { BaseEntity } from "typeorm";
import { BaseInterface } from "../EntityInterfaces/BaseInterface";
// const {db} = require('../Configuration/dbConfig');

export class GRepo<T extends BaseInterface> {
     public async fetchAll(req : Request,res : Response){
      let b:T; 
      // let a = typeof(this.b);
      res.status(200).send(typeof b);
      //   res.status(200).send(AppDataSource.manager.find(typeof b));
        
      //   try
      //   {
      //       const data = await db.find();
      //       res.status(200).json(data);
      //   }
      //   catch(e){
      //      res.status(500).json(e);
      //   }
     }
}