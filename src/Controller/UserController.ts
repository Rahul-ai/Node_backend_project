import express from "express";
import { controllerService } from "../ControllerService/ControllerService";
import { User } from "../entity/User";
import { db } from "../Configuration/dbConfig";
const router = express.Router();

// other route/Api
// ...

// Crud operation
controllerService(User,router);

module.exports = router;