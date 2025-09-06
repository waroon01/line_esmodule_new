import jwt from "jsonwebtoken";
import createError from "../utils/auth/createError.js";
import prisma from "../config/prisma_config.js";

// export const authCheck = async (req, res, next) => {
//   try {
//     const headersAuth = req.headers.authorization;
//     if (!headersAuth) {
//       createError(400, "Header authenticate not found");
//     }

//     const token = headersAuth.split(" ")[1];
//     if (!token) {
//       createError(400, "your token not foundja");
//     }

//     const decode = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decode;

//     const user = await prisma.user.findFirst({
//       where: {
//         email: req.user.email,
//       },
//     });

//     console.log("... ", user);

//     next();
//   } catch (error) {
//     next(error);
//   }
// };
export const authCheck = async (req, res, next) => {
  try {
    const headersAuth = req.headers.authorization;
    if (!headersAuth) {
      return res.status(400).json({ message: "Header authenticate not found" });
    }

    const token = headersAuth.split(" ")[1];
    if (!token) {
      return res.status(400).json({ message: "Token not found" });
    }

    // ✅ ตรวจสอบ token + exp
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;

    // ✅ เช็ค user ในฐานข้อมูลว่ายังอยู่ไหม
    const user = await prisma.user.findFirst({
      where: { email: req.user.email },
    });

    if (!user) {
      return res.status(401).json({ message: "User not found or removed" });
    }

    next();
  } catch (error) {
    console.error("Auth Error:", error.message);

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "jwt expired" });
    }

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }

    return res.status(500).json({ message: "Internal server error" });
  }
};


// export const adminCheck = async (req,res,next)=>{
//   try {
//     const {email} = req.user
//     const adminUser = await prisma.user.findFirst({
//       where: {
//         email: email
//       }
//     })
//     if(!adminUser || adminUser.role !== 'ADMIN'){
//       createError(403, "Access Denied Admin Only")
//     }
//     // console.log('admin check ',adminUser)
//     next()
//   } catch (error) {
//     next(error);
//   }
// }

import prisma from "../config/prisma_config.js";

export const adminCheck = async (req, res, next) => {
  try {
    const { email } = req.user;

    const adminUser = await prisma.user.findFirst({
      where: { email },
    });

    if (!adminUser || adminUser.role !== "ADMIN") {
      return res.status(403).json({ message: "Access Denied: Admin Only" });
    }

    next();
  } catch (error) {
    console.error("Admin Check Error:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

