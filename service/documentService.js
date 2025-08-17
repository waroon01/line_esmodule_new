import prisma from "../config/prisma_config.js";

export const findDocuments = async ({ fullNumber, year, documentType, title }) => {
  const letters = await prisma.officialLetter.findMany({
    where: {
      AND: [
        fullNumber ? { fullNumber: { contains: String(fullNumber) } } : undefined,
        title ? { title: { contains: String(title) } } : undefined,
        year ? { year: Number(year) } : undefined,
        documentType ? { documentType: String(documentType) } : undefined,
      ].filter(Boolean),
    },
    orderBy: { createdAt: "desc" },
  });

  return letters;
};
