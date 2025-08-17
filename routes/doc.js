import express from "express";
import prisma from "../config/prisma_config.js";
const router = express.Router();
router.get('/letter', async (req, res) => {
  try {
    const letters = await prisma.officialLetter.findMany({
      orderBy: {
        createdAt: "desc"  // เรียงล่าสุดก่อน
      }
    });

    console.log(letters);

    // ส่งข้อมูลกลับเป็น JSON
    res.json(letters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "เกิดข้อผิดพลาดในการดึงข้อมูล" });
  }
});

router.post('/letter', async (req, res) => {
  try {
    const { documentType, year, title, issuedBy, recipient, priority } = req.body;

    // หาเลขล่าสุดของปีและประเภท
    const latest = await prisma.officialLetter.findFirst({
      where: { year, documentType },
      orderBy: { serialNumber: "desc" }
    });

    const nextSerial = latest ? latest.serialNumber + 1 : 1;
    const serialStr = String(nextSerial).padStart(3, "0");

    // สร้าง fullNumber ตามเงื่อนไข
    let fullNumber = "";
    if (documentType === "OUTLETTER") {
      fullNumber = `ศธ.04156/${serialStr}`;
    } else {
      fullNumber = `ที่ ${documentType}/${serialStr}`;
    }

    // เพิ่มข้อมูลลง DB
    const newLetter = await prisma.officialLetter.create({
      data: {
        documentType,
        year,
        serialNumber: nextSerial,
        fullNumber,
        title,
        issuedBy,
        recipient,
        priority
      }
    });

    res.json(newLetter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "เกิดข้อผิดพลาดในการเพิ่มข้อมูล" });
  }
});

router.post('/letter/search', async (req, res) => {
  try {
    const { fullNumber, year, documentType } = req.body;

    if (!fullNumber && !year && !documentType) {
      return res.status(400).json({ error: "กรุณาส่ง fullNumber หรือ year หรือ documentType อย่างน้อย 1 ตัว" });
    }

    const letters = await prisma.officialLetter.findMany({
      where: {
        fullNumber: fullNumber ? String(fullNumber) : undefined,
        year: year ? Number(year) : undefined,
        documentType: documentType ? String(documentType) : undefined
      },
      orderBy: { createdAt: "desc" }
    });

    if (letters.length === 0) {
      return res.status(404).json({ message: "ไม่พบข้อมูลตามเงื่อนไข" });
    }

    res.json(letters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "เกิดข้อผิดพลาดในการค้นหาข้อมูล" });
  }
});




export default router