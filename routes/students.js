import express from "express";
import prisma from "../config/prisma_config.js";
import { findStudents, getStudent } from "../service/studentService.js";
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

router.post("/liststudent", authCheck, async (req, res) => {
  try {
    const students = await prisma.student.findMany({
      orderBy: { student_number: "desc" },
    });
    if (students.length === 0) {
      return res.status(404).json({ message: "ไม่พบข้อมูลนักเรียน" });
    }
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.get("/getstudent/:id", async (req, res) => {
  try {
    const student_number = req.params.id;
    const student = await getStudent(student_number);

    if (!student) {
      return res.status(404).json({ message: "ไม่พบข้อมูลนักเรียน" });
    }

    res.json({ student });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์" });
  }
});

router.post("/updatestudent/:id", authCheck, async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log("id  >>> ",id)
    // เช็คก่อนว่ามี Student นี้หรือไม่
    const existingStudent = await prisma.student.findUnique({
      where: { student_id: parseInt(id) },
    });
    if (!existingStudent) {
      return res
        .status(404)
        .json({ success: false, message: "Student not found" });
    }

    // อัปเดตข้อมูล
    const updatedStudent = await prisma.student.update({
      where: { student_id: parseInt(id) },
      data: {
        ...data,
      },
    });

    return res.status(200).json({ success: true, data: updatedStudent });
  } catch (error) {
    console.log(error);
  }
});

export default router;
