import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "./generated/prisma"; // ปรับ path ตามที่ generate

// ตั้งค่า adapter สำหรับ MariaDB/MySQL
const adapter = new PrismaMariaDb({
  host: "thsv89.hostatom.com",
  port: 3306,
  user: "green_test1",
  password: "?Nq33c7f9",
  database: "green_test1",
  connectionLimit: 5,
});

const prisma = new PrismaClient({ adapter });


export const register = async(req,res,next)=>{
    try{
    /*
        1.check body
        2.check Email in DB
        3.Encrypt Password ->bcryptJS
        4.Insert into DB
        5.Response 
    */
   const { email, name, password } = req.body
   console.log(email,name,password)   
       const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password,
        role: "USER", // default
      },
    });

    res.json({message: "Hello controller"})
    }catch(error){
        next(error)
    }
}

export const login = (req,res)=>{
    res.json({message: "Hello login controller"})
}