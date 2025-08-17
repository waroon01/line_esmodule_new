import { findDocuments } from "../../service/documentService.js";
import { replyMessageLine } from "./replyMessage.js";

export const handleMessage = async (event) => {
  const messageType = event.message.type;

  switch (messageType) {
    case "text":
      const text = event.message.text.trim();

      if (text === "สวัสดี") {
        await replyMessageLine(event.replyToken, {
          type: "text",
          text: "สวัสดีนะครับคุณท่าน",
        });
      } else if (text.toLowerCase().startsWith("doc/")) {
        const queryText = text.substring(4).trim();

        let query = {};

        // ถ้าเป็นตัวเลข 4 หลัก → year
        if (/^\d{4}$/.test(queryText)) {
          query.year = Number(queryText);
        } else {
          // ถ้าไม่ใช่ 4 หลัก → search ทั้ง fullNumber และ title แบบ partial match
          query.fullNumber = queryText;
          query.title = queryText;
        }

        console.log("query >>>", query);

        const letters = await findDocuments(query);

        if (letters.length === 0) {
          await replyMessageLine(event.replyToken, {
            type: "text",
            text: "ไม่พบข้อมูลเอกสารตามที่ค้นหา",
          });
          return;
        }

        // จำกัดไม่เกิน 10 bubble
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
      } else {
        await replyMessageLine(event.replyToken, {
          type: "text",
          text: "ขออภัยครับผมไม่คุ้นกับข้อความคำถามนี้\nกรุณาฝากคำถามไว้ได้นะครับจะกลับมา\nตอบภายหลังนะครับ ขอบคุณมากครับ",
        });
      }
      break;

    case "sticker":
      console.log("sticker");
      break;
  }
};
