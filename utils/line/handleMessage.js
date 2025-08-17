import { findDocuments, createDocumentInDB } from "../../service/documentService.js";
import { replyMessageLine } from "./replyMessage.js";

export const handleMessage = async (event) => {
  const messageType = event.message.type;

  switch (messageType) {
    case "text":
      const text = event.message.text.trim();

      // ข้อความทักทาย
      if (text === "สวัสดี") {
        await replyMessageLine(event.replyToken, {
          type: "text",
          text: "สวัสดีนะครับคุณท่าน",
        });
        return;
      }

      // ตัวอย่าง Flex bookid
      if (text.toLowerCase() === "bookid") {
        const flexMessage = {
          type: "flex",
          altText: `ข้อมูลหนังสือ`,
          contents: {
            type: "bubble",
            header: { type: "box", layout: "vertical", contents: [{ type: "text", text: `Book ID:`, weight: "bold", size: "md" }] },
            body: { type: "box", layout: "vertical", contents: [{ type: "text", text: "รายละเอียดเพิ่มเติมสำหรับการจอง", wrap: true, size: "sm" }] },
            footer: {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "button",
                  style: "primary",
                  action: {
                    type: "postback",
                    label: "createDoc",
                    data: `action=buy&itemid=123`,
                    displayText: "create",
                    inputOption: "openKeyboard",
                    fillInText:
                      "createdoc={\ntitle: \nyear: \ndocumentType: OUTLETTER \nissuedBy: \nrecipient: \n}",
                  },
                },
              ],
            },
          },
        };
        await replyMessageLine(event.replyToken, flexMessage);
        return;
      }

      // ดักข้อความ fillInText createdoc
      if (text.startsWith("createdoc=")) {
        const data = parseFillInText(text);
        if (!data) {
          await replyMessageLine(event.replyToken, {
            type: "text",
            text: "ไม่สามารถอ่านข้อมูลเอกสารได้",
          });
          return;
        }

        try {
          // เรียก Service สร้างเอกสาร
          const newDoc = await createDocumentInDB(data);

          await replyMessageLine(event.replyToken, {
            type: "text",
            text: `สร้างเอกสารเรียบร้อยแล้ว\nเลขที่: ${newDoc.fullNumber}\nTitle: ${newDoc.title}\nปี: ${newDoc.year}`,
          });
        } catch (err) {
          console.error(err);
          await replyMessageLine(event.replyToken, {
            type: "text",
            text: "เกิดข้อผิดพลาดในการสร้างเอกสาร",
          });
        }

        return;
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

// ฟังก์ชัน parse fillInText
function parseFillInText(text) {
  const match = text.match(/\{([\s\S]*)\}/);
  if (!match) return null;
  const content = match[1].trim();
  const obj = {};
  content.split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (key) {
      obj[key.trim()] = rest.join(":").trim();
    }
  });
  return obj;
}
