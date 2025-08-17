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

export const createDocumentInDB = async ({ documentType, title, issuedBy, recipient, priority, year }) => {
  const intYear = parseInt(year, 10);

  // หาเลขล่าสุดของปีและประเภท
  const latest = await prisma.officialLetter.findFirst({
    where: { year: intYear, documentType },
    orderBy: { serialNumber: "desc" },
  });

  const nextSerial = latest ? latest.serialNumber + 1 : 1;
  const serialStr = String(nextSerial).padStart(3, "0");

  // สร้าง fullNumber
  let fullNumber = "";
  if (documentType === "OUTLETTER") {
    fullNumber = `ศธ.04156/${serialStr}`;
  } else {
    fullNumber = `ที่ ${documentType}/${serialStr}`;
  }

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
    },
  });

  return newLetter;
};