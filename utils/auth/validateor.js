//validate with yup
import { number, object, string } from "yup";

export const registerSchema = object({
  email: string()
    .email("Email ต้องเป็นรูปแบบ ที่ถูกต้องเท่านั้น")
    .required("กรุณากรอก Email"),
  name: string().min(3, "Name ต้องมากกว่า 3 อักขระ"),
  password: string().min(6, "password ต้องมากกว่า 6 อักขระ"),
});

export const loginSchema = object({
  email: string()
    .email("Email ต้องเป็นรูปแบบ ที่ถูกต้องเท่านั้น")
    .required("กรุณากรอก Email"),
  password: string().min(6, "password ต้องมากกว่า 6 อักขระ"),
});

export const documentsSchema = object({
  documentType: string().required("ระบุเลืกประเภทเอกสาร"),
  year: number()
    .transform((value, originalValue) => {
      // ถ้า originalValue เป็น string ที่เป็นตัวเลข → แปลงเป็น Number
      return isNaN(originalValue) ? undefined : Number(originalValue);
    })
    .integer("ปีระบุเป็นตัวเลขจำนวนเต็มตั้งแต่ปี 2568 เป็นต้นไป")
    .min(2568, "ปีต้องตั้งแต่ 2568 ขึ้นไป")
    .required("Year is required"),
  title: string().max(500, "เรื่องที่ส่งต้องไม่เกินกว่า 500 อักขระ"),
  issuedBy: string()
    .max(60, "ระบุชื่อผู้ออกเลขที่ ไม่เกินกว่า 60 อักขระ")
    .required("กรอกชื่อผู้ออกเลขที่นี้"),
  recipient: string()
    .max(60, "ระบุชื่อผู้รับเอกสาร ไม่เกินกว่า 60 อักขระ")
    .required("ระบุผู้รับเอกสารห้ามเว้นว่าง"),
  priority: string().required("กรุณาเลือกชั้นความเร็วของเอกสารนี้"),
});

export const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const errtext = error.errors.join(",");
    // console.log("errtext ",errtext)
    const err = new Error(errtext);
    next(err);
  }
};
