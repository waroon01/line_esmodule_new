import dotenv from 'dotenv';
dotenv.config();
import express from "express"
import cors from "cors"
import morgan from "morgan"
import authRoute from "./routes/auth.js"
import lineRoute from "./routes/line.js"
import documentRoute from "./routes/doc.js"
import studentRoute from "./routes/students.js"


const app = express()

// middlewares
app.use(cors()) //Allows corss origins
app.use(morgan('dev'))

// Routing
// GET, POST, PUT, PATCH, DELETE
// http://localhost:8000
app.get('/',(req,res)=>{
    res.json({message: "success get server"})
})

app.use('/line',lineRoute)

app.use(express.json())
app.use('/auth',authRoute)
app.use('/document', documentRoute)
app.use('/student',studentRoute)


// Error handling
app.use((err,req,res,next)=>{
    res.status(err.code || 500).json({message: err.message || "Someting Wrong!!!"})
})

const PORT = 8000
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))