import express from "express";
import { controllerService } from "../ControllerService/ControllerService";
import { User } from "../entity/User";
const router = express.Router();

// Crud Router
controllerService(User,router);

module.exports = router;