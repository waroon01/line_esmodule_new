import {
  findDocuments,
  createDocumentInDB,
} from "../../service/documentService.js";
import { replyMessageLine } from "./replyMessage.js";
import startLineLoading from "./lineLoading.js";
import { findStudents } from "../../service/studentService.js";
import axios from "axios";
import handleImage from "./handleImage.js";

export const handleMessage = async (event) => {
  const messageType = event.message.type;

  switch (messageType) {
    case "text":
      const text = event.message.text.trim();
      if (text === "upload_yes") {
        // ให้ Apps Script เอาข้อมูลจาก sheet มาบันทึกลง Drive
            const formData = new FormData();
            formData.append("type", "confirmUpload");
            formData.append("userId", event.source.userId);

            // ต้องใส่ headers ของ FormData
            const response = await axios.post(
              "https://script.google.com/macros/s/AKfycbzn9mNQd9wBOvf2DCYc4MNJQE9ssVKNi-0hMdoFo2C-noocw89mKFSwn-lihQ1jEGbm/exec",
              formData
            );

        await replyMessageLine(event.replyToken, {
          type: "text",
          text: `✅ อัพโหลดเรียบร้อยแล้ว\nURL: ${response.data.url}`,
        });
      }

      if (text === "upload_no") {
        await startLineLoading(event.source.userId, 5);
        // ยกเลิกและลบออก
            const formData = new FormData();
            formData.append("type", "cancelUpload");
            formData.append("userId", event.source.userId);

            // ต้องใส่ headers ของ FormData
            const response = await axios.post(
              "https://script.google.com/macros/s/AKfycbzn9mNQd9wBOvf2DCYc4MNJQE9ssVKNi-0hMdoFo2C-noocw89mKFSwn-lihQ1jEGbm/exec",
              formData
            );

        await replyMessageLine(event.replyToken, {
          type: "text",
          text: "❌ ยกเลิกการอัพโหลดแล้ว",
        });
      }
      // ข้อความทักทาย
      if (text === "สวัสดี") {
        await startLineLoading(event.source.userId, 5);
        await replyMessageLine(event.replyToken, {
          type: "text",
          text: "สวัสดีนะครับคุณท่านครับ",
        });
        return;
      }

      if (text.toLowerCase().startsWith("std/")) {
        await startLineLoading(event.source.userId, 5);
        const queryText = text.substring(4).trim();
        let query = {};

        // เช็คว่าเป็นตัวเลขทั้งหมดหรือไม่
        if (/^\d+$/.test(queryText)) {
          query.student_number = queryText; // เป็นตัวเลข → search by student_number
        } else {
          query.first_name = queryText; // เป็นอักษร → search by first_name
        }

        const students = await findStudents(query);

        if (students.length === 0) {
          await replyMessageLine(event.replyToken, {
            type: "text",
            text: "ไม่พบข้อมูลนักเรียนตามที่ค้นหา",
          });
          return;
        }

        // เตรียม Flex message แสดงผลลัพธ์ไม่เกิน 10 record
        const bubbleStudents = students.slice(0, 10);
        const flexMessage = {
          type: "flex",
          altText: "ผลการค้นหานักเรียน",
          contents: {
            type: "carousel",
            contents: bubbleStudents.map((s) => ({
              type: "bubble",
              header: {
                type: "box",
                layout: "vertical",
                contents: [
                  {
                    type: "text",
                    text: `รหัสนักเรียน: ${s.student_number}`,
                    weight: "bold",
                    size: "md",
                  },
                  {
                    type: "text",
                    text: `ชื่อ: ${s.prefix_name || ""} ${s.first_name} ${
                      s.last_name
                    }`,
                    size: "sm",
                  },
                ],
              },
              body: {
                type: "box",
                layout: "vertical",
                contents: [
                  {
                    type: "text",
                    text: `ชั้น: ${s.class_level} ห้อง: ${s.class_room}`,
                    size: "sm",
                  },
                  { type: "text", text: `เพศ: ${s.gender}`, size: "sm" },
                ],
              },
            })),
          },
        };

        await replyMessageLine(event.replyToken, flexMessage);
        return;
      }

      if (text.toLowerCase() === "createdoc") {
        await startLineLoading(event.source.userId, 5);
        await replyMessageLine(event.replyToken, {
          type: "text",
          text: "https://liff.line.me/1657704109-dZayMMoA คลิกเพื่อขอเลขที่ออกที่นี่",
        });
        return;
      }
      // ค้นหา doc/
      if (text.toLowerCase().startsWith("doc/")) {
        await startLineLoading(event.source.userId, 5);
        const queryText = text.substring(4).trim();
        let query = {};

        if (/^\d{4}$/.test(queryText)) {
          query.year = Number(queryText);
        } else {
          query.fullNumber = queryText;
          query.title = queryText;
        }

        const letters = await findDocuments(query);
        if (letters.length === 0) {
          await replyMessageLine(event.replyToken, {
            type: "text",
            text: "ไม่พบข้อมูลเอกสารตามที่ค้นหา",
          });
          return;
        }

        const bubbleLetters = letters.slice(0, 10);
        const flexMessage = {
          type: "flex",
          altText: "ผลการค้นหาเอกสาร",
          contents: {
            type: "carousel",
            contents: bubbleLetters.map((l) => ({
              type: "bubble",
              header: {
                type: "box",
                layout: "vertical",
                contents: [
                  {
                    type: "text",
                    text: `เลขที่: ${l.fullNumber}`,
                    weight: "bold",
                    size: "md",
                  },
                  {
                    type: "text",
                    text: `ปี: ${l.year}`,
                    size: "sm",
                    color: "#888888",
                  },
                ],
              },
              body: {
                type: "box",
                layout: "vertical",
                contents: [
                  {
                    type: "text",
                    text: `เรื่อง: ${l.title}`,
                    wrap: true,
                    size: "sm",
                  },
                  {
                    type: "text",
                    text: `ผู้ส่ง: ${l.issuedBy}`,
                    wrap: true,
                    size: "sm",
                  },
                  {
                    type: "text",
                    text: `ผู้รับ: ${l.recipient}`,
                    wrap: true,
                    size: "sm",
                  },
                ],
              },
            })),
          },
        };

        await replyMessageLine(event.replyToken, flexMessage);
        return;
      }

      // ข้อความไม่รู้จัก
      await replyMessageLine(event.replyToken, {
        type: "text",
        text: "ขออภัยครับผมไม่คุ้นกับข้อความคำถามนี้\nกรุณาฝากคำถามไว้ได้นะครับจะกลับมา\nตอบภายหลังนะครับ ขอบคุณมากครับ",
      });

      break;

    case "sticker":
      console.log("sticker");
      break;
    case "image":
      // await startLineLoading(event.source.userId, 10);
      handleImage(event);
      break;
  }
};
