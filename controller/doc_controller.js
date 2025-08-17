import prisma from "../config/prisma_config.js";
import { findDocuments } from "../service/documentService.js";

export const createDocument = async (req, res, next) => {
  try {
    const { documentType, title, issuedBy, recipient, priority } = req.body;
    const year = parseInt(req.body.year, 10); // ✅ แปลงเป็น number

    // หาเลขล่าสุดของปีและประเภท
    const latest = await prisma.officialLetter.findFirst({
      where: { year, documentType },
      orderBy: { serialNumber: "desc" },
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
        year, // ✅ ตอนนี้เป็น Int แล้ว
        serialNumber: nextSerial,
        fullNumber,
        title,
        issuedBy,
        recipient,
        priority,
      },
    });

    res.json(newLetter);
  } catch (error) {
    // console.error(error);
    next(error);
  }
};


export const listDocuments = async (req, res, next) => {
  try {
    const letters = await prisma.officialLetter.findMany({
      orderBy: {
        createdAt: "desc", // เรียงล่าสุดก่อน
      },
    });

    // console.log(letters);

    // ส่งข้อมูลกลับเป็น JSON
    res.json(letters);
  } catch (error) {
    // console.error(error);
    next(error);
  }
};

export const searchDocuments = async (req, res, next) => {
  try {
    const { fullNumber, year, documentType } = req.body;

    if (!fullNumber && !year && !documentType) {
      return res.status(400).json({
        error: "กรุณาส่ง fullNumber หรือ year หรือ documentType อย่างน้อย 1 ตัว",
      });
    }

    const letters = await findDocuments({ fullNumber, year, documentType });

    if (letters.length === 0) {
      return res.status(404).json({ message: "ไม่พบข้อมูลตามเงื่อนไข" });
    }

    res.json(letters);
  } catch (error) {
    next(error);
  }
};
