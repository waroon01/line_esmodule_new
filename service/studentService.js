import prisma from "../config/prisma_config.js";

/**
 * ค้นหานักเรียนตาม student_number และ first_name
 * @param {Object} filters { student_number, first_name }
 * @returns {Array} students
 */
export const findStudents = async (filters) => {
  const { student_number, first_name } = filters;

  const where = {};

  if (student_number && student_number.trim() !== "") {
    where.student_number = student_number;
  }

  if (first_name && first_name.trim() !== "") {
    where.first_name = { contains: first_name }; // partial match
  }

  const students = await prisma.student.findMany({
    where,
    // take: 10,
    orderBy: { student_number: "desc" },
  });

  return students;
};

export const getStudent = async (student_number)=>{
  try {
    const student = await prisma.student.findFirst({
      where: {
        student_number: student_number
      }
    })
    return student
  } catch (error) {
    console.log(error)
  }

}
