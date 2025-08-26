import express from "express";
import prisma from "../config/prisma_config.js";
import { findStudents } from "../service/studentService.js";
import { authCheck } from "../middleware/authCheck.js";
const router = express.Router();

router.post("/find", async (req, res) => {
  try {
    const students = await findStudents(req.body);

    if (students.length === 0) {
      return res.status(404).json({ message: "ไม่พบข้อมูลนักเรียน" });
    }

    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.post("/liststudent",authCheck, async (req, res) => {
  try {
    const students = await prisma.student.findMany({
      orderBy: { student_number: "desc" },
    });
    if (students.length === 0) {
      return res.status(404).json({ message: "ไม่พบข้อมูลนักเรียน" });
    }
    res.json(students);
  } catch (error) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

export default router;
