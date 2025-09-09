import express from "express";
import { createDocument, getLatestDocument, listDocuments, searchDocuments, updateOfficialLetter } from "../controller/doc_controller.js";
import { documentsSchema, validate } from "../utils/auth/validateor.js";
import {adminCheck, authCheck} from "../middleware/authCheck.js";

const router = express.Router();

router.get('/letter', listDocuments);
router.post('/letter', validate(documentsSchema),createDocument);
router.post('/letter/search', authCheck, adminCheck, searchDocuments);
router.get('/latestdoc/:year', getLatestDocument)
router.put('/letter/update/:id', updateOfficialLetter)





export default router