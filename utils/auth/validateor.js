//validate with yup
import {object, string} from "yup"

export const registerSchema = object({
    email: string().email("Email ต้องเป็นรูปแบบ ที่ถูกต้องเท่านั้น").required("กรุณากรอก Email"),
    name: string().min(3,"Name ต้องมากกว่า 3 อักขระ"),
    password: string().min(6,"password ต้องมากกว่า 6 อักขระ"),
})

export const validate = (schema)=>async(req,res,next)=>{
    try {
        await schema.validate(req.body,{abortEarly: false});
        next()
    } catch (error) {
        const errtext = error.errors.join(",")
        // console.log("errtext ",errtext)
        const err = new Error(errtext)
        next(err)
    }
}