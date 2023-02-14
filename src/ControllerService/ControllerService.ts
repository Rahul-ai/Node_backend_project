import { Router } from "express-serve-static-core";
import { EntityTarget } from "typeorm";
import { GenericDomainService } from "../GenericRepo/GRepo";
import { logger } from "../MiddelWare/Logger/logger";

export const controllerService= <T>(entity:EntityTarget<T>,router:Router)=>{

    const repo = GenericDomainService(entity)

    router.get("/:id",logger, repo.getById);
    router.get("/",logger, repo.fetchAll);
    router.post("/",logger, repo.create);
    router.put("/:id",logger, repo.update);
    router.delete("/:id",logger, repo.Delete);
    router.post("/withpage",logger, repo.withPagination);

    return router; 
}
