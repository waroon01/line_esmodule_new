import prisma from "../config/prisma_config";

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

