import * as line from "@line/bot-sdk";
import express from "express";
import {
  lineConfig,
} from "../config/line_config.js";
import handleEvent from "../controller/line_controller.js";
import { createRichmenu, removeAll_Ricemenu } from "../controller/line_richmenu_controllers.js";


const router = express.Router();

router.post("/webhook", line.middleware(lineConfig), (req, res) => {
  Promise.all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(`ข้อผิดพลาด ${err}`);
      res.status(500).end();
    });
});

router.post("/createrichmenu",createRichmenu);


/**
 * DELETE /line/deleterichmenus
 * ลบ Rich Menu ทั้งหมด
 */
router.delete("/deleterichmenus", removeAll_Ricemenu);


export default router;
