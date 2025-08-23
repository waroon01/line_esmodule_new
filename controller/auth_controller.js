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
        password: hashPassword,
      },
    });

    // console.log(newUser);
    // 5.Response
    res.json({ message: "Register Success" });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    /*
    1. validate
    2. check email
    3. check password
    4. generate token
    5. response
    */

    // 2. check email
    const { email, password } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!user) {
      createError(400, "Email or Password is invalid!!");
    }

    //3. check password
    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword) {
      createError(400, "password wrong");
    }

    //4. generate token
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });

    console.log(token);
    res.json({ message: "Login your Success", payload: payload, token: token });
  } catch (error) {
    next(error);
  }
};

export const currentUser = async(req,res)=>{
  try {
    console.log("test")
    const user = await prisma.user.findFirst({
      where: {
        email: req.user.email
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true
      }
    })
    res.json({user})
  } catch (error) {
    next(error)
  }
}

export const currentAdmin = async(req,res)=>{
  try {
    console.log("test")
    const user = await prisma.user.findFirst({
      where: {
        email: req.user.email
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true
      }
    })
    res.json({user})
  } catch (error) {
    next(error)
  }
}