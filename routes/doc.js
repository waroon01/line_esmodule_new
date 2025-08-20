import express from "express";
import { createDocument, listDocuments, searchDocuments } from "../controller/doc_controller.js";
import { documentsSchema, validate } from "../utils/auth/validateor.js";
import authCheck from "../middleware/authCheck.js";

const router = express.Router();

router.get('/letter', listDocuments);
router.post('/letter', validate(documentsSchema),createDocument);
router.post('/letter/search', authCheck, searchDocuments);




export default router