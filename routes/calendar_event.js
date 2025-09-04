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

export default route;
