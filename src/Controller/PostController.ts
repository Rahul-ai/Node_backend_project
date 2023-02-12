import express from "express";
import { db } from "../Configuration/dbConfig";
import { Post } from "../entity/Post";
import { GenericDomainService } from "../GenericRepo/GRepo";

const router = express.Router();
const Postrepo = GenericDomainService(Post);

// Router
router.get("/", Postrepo.fetchAll);
router.get("/:id", Postrepo.getById);

module.exports = router;