import { findDocuments } from "../../service/documentService.js";
import { replyMessageLine } from "./replyMessage.js";

export const handleMessage = async (event) => {
        console.log(event)
  const messageType = event.message.type;
  switch (messageType) {
    case "text":
      if (event.message.text === "สวัสดี") {
        await replyMessageLine(event.replyToken, {
          type: "text",
          text: "สวัสดีนะครับคุณท่าน",
        });
      } else if (event.message.text.startsWith("doc/")) {
        const query = event.message.text.substring(4).trim(); // เอาข้อความหลัง "doc/"
        console.log("query ",query)
        // สมมติให้ใช้เป็น fullNumber
        const letters = await findDocuments({ fullNumber: query });

        if (letters.length > 0) {
          const results = letters
            .map(
              (l) =>
                `เลขที่: ${l.fullNumber}\nเรื่อง: ${l.title}\nผู้ส่ง: ${l.issuedBy}\nผู้รับ: ${l.recipient}`
            )
            .join("\n\n");

          await replyMessageLine(event.replyToken, {
            type: "text",
            text: results,
          });
        } else {
          await replyMessageLine(event.replyToken, {
            type: "text",
            text: "ไม่พบข้อมูลเอกสารตามที่ค้นหา",
          });
        }
      }
      else {
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
