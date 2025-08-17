import prisma from "../config/prisma_config.js";
import createError from "../utils/auth/createError.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    /*
        1.check body
        2.check Email in DB
        3.Encrypt Password ->bcryptJS
        4.Insert into DB
        5.Response 
    */

    // 1.check body
    const { email, name, password } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    // 2.check Email in DB
    if (user) {
      createError(400, "Email aleady exist!!!");
    }
    // 3.Encrypt Password ->bcryptJS
    const hashPassword = bcrypt.hashSync(password, 10);
    // 4.Insert into DB
    const newUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: hashPassword
        }
    })

    console.log(newUser);
    res.json({ message: "Hello controller" });
  } catch (error) {
    next(error);
  }
};

export const login = (req, res) => {
  res.json({ message: "Hello login controller" });
};
