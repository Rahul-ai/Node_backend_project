import express , { Express, Request, Response } from "express";
import { Post } from "../entity/Post";
import { GenericDomainService } from "../GenericRepo/GRepo";

const router = express.Router();
const a = GenericDomainService(Post);

// Router
router.get("/", a.fetchAll);

module.exports = router;