import express from "express";
import prisma from "../config/prisma_config.js";
import { createDocument, listDocuments, searchDocuments } from "../controller/doc_controller.js";
import { documentsSchema, validate } from "../utils/auth/validateor.js";

const router = express.Router();

router.get('/letter', listDocuments);
router.post('/letter', validate(documentsSchema),createDocument);
router.post('/letter/search', searchDocuments);




export default router