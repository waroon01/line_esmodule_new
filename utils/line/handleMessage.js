import { replyMessageLine } from "./replyMessage.js";

export const handleMessage = async (event) => {
  const messageType = event.message.type;
  switch (messageType) {
    case "text":
      if (event.message.text === "สวัสดี") {
        await replyMessageLine(event.replyToken, {
          type: "text",
          text: "สวัสดีนะครับคุณท่าน",
        });
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
