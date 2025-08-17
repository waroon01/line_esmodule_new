import prisma from "../config/prisma_config.js";

export const findDocuments = async ({ fullNumber, year, documentType }) => {
  const letters = await prisma.officialLetter.findMany({
    where: {
      fullNumber: fullNumber ? String(fullNumber) : undefined,
      year: year ? Number(year) : undefined,
      documentType: documentType ? String(documentType) : undefined,
    },
    orderBy: { createdAt: "desc" },
  });

  return letters;
};