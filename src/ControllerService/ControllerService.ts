import { Router } from "express-serve-static-core";
import { EntityTarget } from "typeorm";
import { GenericDomainService } from "../GenericRepo/GRepo";

export const controllerService= <T>(entity:EntityTarget<T>,router:Router)=>{

    const repo = GenericDomainService(entity)

    router.get("/:id", repo.getById);
    router.get("/", repo.fetchAll);
    router.post("/", repo.create);
    router.put("/:id", repo.update);
    router.delete("/:id", repo.Delete);
    router.post("/withpage", repo.withPagination);

    return router; 
}
