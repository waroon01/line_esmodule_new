import jwt from "jsonwebtoken";
import createError from "../utils/auth/createError.js";
import prisma from "../config/prisma_config.js";

export const authCheck = async (req, res, next) => {
  try {
    const headersAuth = req.headers.authorization;
    if (!headersAuth) {
      createError(400, "Header authenticate not found");
    }

    const token = headersAuth.split(" ")[1];
    if (!token) {
      createError(400, "your token not foundja");
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;

    const user = await prisma.user.findFirst({
      where: {
        email: req.user.email,
      },
    });

    console.log("... ", user);

    next();
  } catch (error) {
    next(error);
  }
};

export const adminCheck = async (req,res,next)=>{
  try {
    const {email} = req.user
    const adminUser = await prisma.user.findFirst({
      where: {
        email: email
      }
    })
    if(!adminUser || adminUser.role !== 'ADMIN'){
      createError(403, "Access Denied Admin Only")
    }
    // console.log('admin check ',adminUser)
    next()
  } catch (error) {
    next(error);
  }
}
