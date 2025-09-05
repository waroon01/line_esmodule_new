import express from "express";
import prisma from "../config/prisma_config.js";
import { eventSchema, validate } from "../utils/auth/validateor.js";
const route = express.Router();

route.post("/create", validate(eventSchema),async (req, res, next) => {
  try {
    const { title, description, location, event_date } = req.body;
    console.log(title, event_date);
    const response = await prisma.events_thaigham.create({
      data: {
        title: title,
        description: description,
        location: location,
        event_date: new Date(event_date),
      },
    });
    res.status(200).json({success: true, data: response})
  } catch (error) {
    next(error);
  }
});

// ดึงข้อมูล event ทั้งหมด
route.get("/events", async (req, res, next) => {
  try {
    const events = await prisma.events_thaigham.findMany({
      orderBy: { event_date: "asc" } // เรียงตามวันที่จากน้อยไปมาก
    });
    res.status(200).json({ success: true, data: events });
  } catch (error) {
    next(error);
  }
});

// update Event
route.put("/update/:id", async (req, res, next) => {
  try {
    const { id } = req.params; // รับ id จาก params
    console.log(id)
    const { title, description, location, event_date } = req.body; // รับข้อมูลใหม่จาก body
    console.log(title,description,location,event_date)

    const updatedEvent = await prisma.events_thaigham.update({
      where: { id: Number(id) }, // Prisma ต้องแปลงเป็น Number ถ้า id เป็น int
      data: {
        title,
        description,
        location,
        event_date: event_date ? new Date(event_date) : undefined,
      },
    });

    res.status(200).json({ success: true, data: updatedEvent });
  } catch (error) {
    if (error.code === "P2025") {
      // Prisma error: Record not found
      res.status(404).json({ success: false, message: "Event not found" });
    } else {
      next(error);
    }
  }
});



export default route;
