import express from "express";
import { db } from "../Configuration/dbConfig";
import { User } from "../entity/User";
import { GenericDomainService } from "../GenericRepo/GRepo";
const router = express.Router();
const userRepo = GenericDomainService(User);

router.get("/:id", userRepo.getById);
router.get("/", userRepo.fetchAll);
router.post("/", userRepo.create);
router.put("/:id",userRepo.update);

module.exports = router;