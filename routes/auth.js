import express from "express";
const router = express.Router();
import {
  currentAdmin,
  currentUser,
  getListUser,
  login,
  register,
} from "../controller/auth_controller.js";
import {
  loginSchema,
  registerSchema,
  validate,
} from "../utils/auth/validateor.js";
import { adminCheck, authCheck } from "../middleware/authCheck.js";

//Endpoint url http://localhost:8000/auth/register
router.post("/register", validate(registerSchema), register);

//Endpoint url http://localhost:8000/auth/login
router.post("/login", validate(loginSchema), login);

router.post("/current-user", authCheck, currentUser);

router.post("/current-admin", authCheck, adminCheck, currentAdmin);

router.post("/listuser",authCheck, getListUser)

export default router;
