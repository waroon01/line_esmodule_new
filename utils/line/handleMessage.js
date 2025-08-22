import { findDocuments, createDocumentInDB } from "../../service/documentService.js";
import { replyMessageLine } from "./replyMessage.js";
import startLineLoading from "./lineLoading.js"
import { findStudents } from "../../service/studentService.js";

export const handleMessage = async (event) => {
  await startLineLoading(event.source.userId, 5)
  const messageType = event.message.type;

  switch (messageType) {
    case "text":
      const text = event.message.text.trim();

      // ข้อความทักทาย
      if (text === "สวัสดี") {
        await replyMessageLine(event.replyToken, {
          type: "text",
          text: "สวัสดีนะครับคุณท่านครับ",
        });
        return;
      }

    if (text.toLowerCase().startsWith("std/")) {
      const queryText = text.substring(4).trim();

      // เตรียม query สำหรับ service
      const students = await findStudents({ 
        student_number: queryText, 
        first_name: queryText 
      });

      if (students.length === 0) {
        await replyMessageLine(event.replyToken, {
          type: "text",
          text: "ไม่พบข้อมูลนักเรียนตามที่ค้นหา"
        });
        return;
      }

      // เตรียม Flex message แสดงผลลัพธ์ ไม่เกิน 10 record
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
                { type: "text", text: `รหัสนักเรียน: ${s.student_number}`, weight: "bold", size: "md" },
                { type: "text", text: `ชื่อ: ${s.prefix_name || ""} ${s.first_name} ${s.last_name}`, size: "sm" }
              ]
            },
            body: {
              type: "box",
              layout: "vertical",
              contents: [
                { type: "text", text: `ชั้น: ${s.class_level} ห้อง: ${s.class_room}`, size: "sm" },
                { type: "text", text: `เพศ: ${s.gender}`, size: "sm" }
              ]
            }
          }))
        }
      };

      await replyMessageLine(event.replyToken, flexMessage);
      return;
    }


      if(text.toLowerCase() === "createdoc" ){
        await replyMessageLine(event.replyToken, {
          type: "text",
          text: "https://liff.line.me/1657704109-dZayMMoA คลิกเพื่อขอเลขที่ออกที่นี่",
        });
        return
      }
      // ค้นหา doc/
      if (text.toLowerCase().startsWith("doc/")) {
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
          await replyMessageLine(event.replyToken, { type: "text", text: "ไม่พบข้อมูลเอกสารตามที่ค้นหา" });
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
              header: { type: "box", layout: "vertical", contents: [{ type: "text", text: `เลขที่: ${l.fullNumber}`, weight: "bold", size: "md" }, { type: "text", text: `ปี: ${l.year}`, size: "sm", color: "#888888" }] },
              body: { type: "box", layout: "vertical", contents: [{ type: "text", text: `เรื่อง: ${l.title}`, wrap: true, size: "sm" }, { type: "text", text: `ผู้ส่ง: ${l.issuedBy}`, wrap: true, size: "sm" }, { type: "text", text: `ผู้รับ: ${l.recipient}`, wrap: true, size: "sm" }] },
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
  }
};


