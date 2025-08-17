import express from "express"
const router = express.Router()

//Endpoint url http://localhost:8000/auth/register
router.post('/register',(req,res)=>{
    console.log(req.body)
    res.json({message: "register success"})
})

//Endpoint url http://localhost:8000/auth/login
router.post('/login',(req,res)=>{
    res.json({message: "login success"})
})


export default router