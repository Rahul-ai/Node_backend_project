import { EntityTarget} from "typeorm";
import { Request,Response } from "express";
const {db} = require('../Configuration/dbConfig');

export const GenericDomainService = <T>(entity: EntityTarget<T>)=>{
class GRepo
{
   public async fetchAll(req: Request, res: Response) {
      try {
         const data = await db.manager.find(entity);
         res.status(200).json(data);
      }
      catch (e) {
         res.status(500).json(e);
      }
   }

   public async getById(req: Request, res: Response) {
      try {
         const data = await db.manager.findOneBy(entity, {id : req.params.id});
         res.status(200).json(data);
      }
      catch (e) {
         res.status(500).json(e);
      }
   }

   public async create(req: Request, res: Response) {
      try {
         const data = await db.manager.create(entity, req.body);
         res.status(200).json(data);
      }
      catch (e) {
         res.status(500).json(e);
      }
   }

   public async update(req: Request, res: Response) {
      try {
         const data = await db.manager.update(entity,{id: req.params.id}, req.body);
         res.status(200).json(data);
      }
      catch (e) {
         res.status(500).json(e);
      }
   }
}
return new GRepo();
}