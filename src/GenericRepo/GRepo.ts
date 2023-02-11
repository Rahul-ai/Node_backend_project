import { DataSource, EntitySchema, EntityTarget, Repository } from "typeorm";
import { Request,Response } from "express";
const {db} = require('../Configuration/dbConfig');

export const GenericDomainService = <T>(entity: EntityTarget<T>)=>{
class GRepo
{
   public async fetchAll(req: Request, res: Response) {
      try {
         
         // let table = new Set<T>;
         const data = await db.manager.find(entity);
         res.status(200).json(data);
      }
      catch (e) {
         res.status(500).json(e);
      }
   }

   public async findOneBy(req: Request, res: Response) {
      try {
         console.log()
         const data = await db.manager.findOneBy(entity, {id : req.params.id});
         res.status(200).json(data);
      }
      catch (e) {
         res.status(500).json(e);
      }
   }
}
return new GRepo();

  
}