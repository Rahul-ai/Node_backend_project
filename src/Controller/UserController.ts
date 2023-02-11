import express , { Express, Request, Response } from "express";
import { db } from "../Configuration/dbConfig";
import { User } from "../entity/User";
import { GenericDomainService } from "../GenericRepo/GRepo";
const router = express.Router();
const userRepo = GenericDomainService(User);

router.get("/", userRepo.fetchAll);
router.get("/:id", userRepo.findOneBy);

module.exports = router;