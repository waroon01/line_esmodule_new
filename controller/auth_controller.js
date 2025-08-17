import prisma from "../config/prisma_config";

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