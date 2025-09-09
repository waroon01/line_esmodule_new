import prisma from "../config/prisma_config.js";
import {
  createDocumentInDB,
  findDocuments,
  getStatistics,
} from "../service/documentService.js";

export const createDocument = async (req, res, next) => {
  try {
    // กำหนดค่าเริ่มต้นของแต่ละประเภท
    const startSerialMap = {
      OUTLETTER: 147,
      ORDER: 100,
      NOTE: 50,
      CERTIFICATE: 1,
    };

    const newLetter = await createDocumentInDB({ ...req.body, startSerialMap });
    res.json(newLetter);
  } catch (error) {
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
    const { fullNumber, year, documentType, title } = req.body;

    if (!fullNumber && !year && !documentType && !title) {
      return res.status(400).json({
        error:
          "กรุณาส่ง fullNumber หรือ year หรือ documentType หรือ title อย่างน้อย 1 ตัว",
      });
    }

    const letters = await findDocuments({
      fullNumber,
      year,
      documentType,
      title,
    });

    if (letters.length === 0) {
      return res.status(404).json({ message: "ไม่พบข้อมูลตามเงื่อนไข" });
    }

    res.json(letters);
  } catch (error) {
    next(error);
  }
};

export const getLatestDocument = async (req, res, next) => {
  try {
    const { year } = req.params;
    console.log(year)
    if (!year) {
      return res.status(400).json({ message: "Year is Request!!!" });
    }
    console.log(year);
    const latestSerialNumber = await getStatistics(year);
    console.log(latestSerialNumber)
    if (latestSerialNumber.length === 0) {
      return res.status(404).json({ message: "ไม่พบข้อมูลตามปีที่กำหนด" });
    }
    res.json(latestSerialNumber);
  } catch (error) {
    next(error);
  }
};


export const updateOfficialLetter = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updated = await prisma.officialLetter.update({
      where: { id: parseInt(id) },
      data
    });

    res.json({
      message: "OfficialLetter updated successfully",
      letter: updated
    });
  } catch (error) {
    console.error("Error updating OfficialLetter:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};