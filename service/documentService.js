import prisma from "../config/prisma_config.js";

export const findDocuments = async ({ fullNumber, year, documentType, title }) => {
  const letters = await prisma.officialLetter.findMany({
    where: {
      AND: [
        year ? { year: Number(year) } : undefined,
        documentType ? { documentType: String(documentType) } : undefined,
        (fullNumber || title)
          ? {
              OR: [
                fullNumber ? { fullNumber: { contains: String(fullNumber) } } : undefined,
                title ? { title: { contains: String(title) } } : undefined,
              ].filter(Boolean),
            }
          : undefined,
      ].filter(Boolean),
    },
    orderBy: { createdAt: "desc" },
  });

  return letters;
};

export const createDocumentInDB = async ({ documentType, title, issuedBy, recipient, priority, year, note, startSerialMap }) => {
  const intYear = parseInt(year, 10);
  if (!documentType || !title || !issuedBy || !recipient || !intYear) {
    throw new Error("ข้อมูลไม่ครบถ้วน");
  }

  // หาเลขล่าสุดของปีและประเภท
  const latest = await prisma.officialLetter.findFirst({
    where: { year: intYear, documentType },
    orderBy: { serialNumber: "desc" },
  });

  // กำหนดค่าเริ่มต้นจาก mapping หรือ default = 1
  const defaultStart = startSerialMap?.[documentType] || 1;
  const nextSerial = latest?.serialNumber ? latest.serialNumber + 1 : defaultStart;
  const serialStr = nextSerial.toString().padStart(3, "0");

  // สร้าง fullNumber
  const fullNumber = documentType === "OUTLETTER"
    ? `ศธ.04156/${serialStr}`
    : `ที่ ${serialStr}`;

  // บันทึกลง DB
  const newLetter = await prisma.officialLetter.create({
    data: {
      documentType,
      year: intYear,
      serialNumber: nextSerial,
      fullNumber,
      title,
      issuedBy,
      recipient,
      priority,
      note: note || null,
    },
  });

  return newLetter;
};


// ✅ ฟังก์ชันดึงเลขล่าสุดของเอกสารแต่ละประเภท
export const getStatistics = async (year) => {
  try {
    const intYear = parseInt(year, 10);

    // -------------------- OfficialLetter --------------------
    const latest = await prisma.officialLetter.groupBy({
      by: ["documentType"],
      where: intYear ? { year: intYear } : undefined,
      _max: { serialNumber: true },
    });

    const document = await Promise.all(
      latest.map(async (item) => {
        if (!item._max.serialNumber) return null;

        const latestDoc = await prisma.officialLetter.findFirst({
          where: {
            documentType: item.documentType,
            year: intYear ? intYear : undefined,
            serialNumber: item._max.serialNumber,
          },
          orderBy: { createdAt: "desc" },
        });

        return {
          documentType: item.documentType,
          latestSerial: item._max.serialNumber,
          fullNumber: latestDoc?.fullNumber || null,
          title: latestDoc?.title || null,
          createdAt: latestDoc?.createdAt || null,
        };
      })
    );

    // -------------------- Student --------------------
    const total = await prisma.student.count();
    const male = await prisma.student.count({ where: { gender: "ช" } });
    const female = await prisma.student.count({ where: { gender: "ญ" } });

    const student = {
      total,
      male,
      female,
    };

    // -------------------- รวมผลลัพธ์ --------------------
    return {
      document: document.filter(Boolean),
      student,
    };
  } catch (error) {
    console.error("❌ Error fetching statistics:", error);
    throw new Error("ไม่สามารถดึงข้อมูลสถิติได้");
  }
};
