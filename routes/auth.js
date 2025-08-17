import express from "express";
const router = express.Router();
import { login, register } from "../controller/auth_controller.js";
import { registerSchema, validate } from "../utils/auth/validateor.js";



//Endpoint url http://localhost:8000/auth/register
router.post("/register", validate(registerSchema), register);

//Endpoint url http://localhost:8000/auth/login
router.post("/login", login);

export default router;