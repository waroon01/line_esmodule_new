import axios from "axios";
import { lineBlobClient } from "../../config/line_config.js";
import { replyMessageLine } from "./replyMessage.js";

async function handleImage(event) {
  const messageId = event.message.id;

  // ได้ค่าเป็น Readable Stream
  const stream = await lineBlobClient.getMessageContent(messageId);

  // เก็บ chunks
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }

  // รวมเป็น Buffer
  const buffer = Buffer.concat(chunks);

  // แปลงเป็น Base64
  const base64Image = buffer.toString("base64");

  console.log("Base64:", base64Image);

  const formData = new FormData();
  formData.append("type", "tempImage");
  formData.append("userId", event.source.userId);
  formData.append("image", base64Image);
  formData.append("fileName", "test.png"); // optional
  formData.append("contentType", "image/png"); // optional
  formData.append("status", "pending"); // optional

  // ต้องใส่ headers ของ FormData
  const response = await axios.post(
    "https://script.google.com/macros/s/AKfycbzn9mNQd9wBOvf2DCYc4MNJQE9ssVKNi-0hMdoFo2C-noocw89mKFSwn-lihQ1jEGbm/exec",
    formData
  );

  console.log(response);

   // ส่ง quick reply ให้ user
  await replyMessageLine(event.replyToken, {
    type: "text",
    text: "คุณต้องการอัพโหลดภาพนี้หรือไม่?",
    quickReply: {
      items: [
        {
          type: "action",
          action: {
            type: "message",
            label: "✅ ใช่",
            text: "upload_yes"
          }
        },
        {
          type: "action",
          action: {
            type: "message",
            label: "❌ ไม่ใช่",
            text: "upload_no"
          }
        }
      ]
    }
  });
}

export default handleImage;
