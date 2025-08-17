import * as line from '@line/bot-sdk'
import express from "express"
import {lineConfig} from '../config/line_config.js';
import handleEvent from '../controller/line_controller.js';


const router = express.Router()

router.post("/webhook", line.middleware(lineConfig), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(`ข้อผิดพลาด ${err}`);
      res.status(500).end();
    });
});

export default router