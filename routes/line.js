import * as line from "@line/bot-sdk";
import express from "express";
import {
  lineBlobClient,
  lineclient,
  lineConfig,
} from "../config/line_config.js";
import handleEvent from "../controller/line_controller.js";
import path from "path";
import fs from "fs";

const router = express.Router();

router.post("/webhook", line.middleware(lineConfig), (req, res) => {
  Promise.all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(`ข้อผิดพลาด ${err}`);
      res.status(500).end();
    });
});

router.post("/createrichmenu", async (req, res) => {
  console.log("test")
  res.json({message: "success"})
});

export default router;
