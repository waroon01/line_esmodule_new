// import axios from "axios";
// import { lineBlobClient } from "../../config/line_config.js";
// import { replyMessageLine } from "./replyMessage.js";

// async function handleImage(event) {
//   const messageId = event.message.id;

//   // ได้ค่าเป็น Readable Stream
//   const stream = await lineBlobClient.getMessageContent(messageId);

//   // เก็บ chunks
//   const chunks = [];
//   for await (const chunk of stream) {
//     chunks.push(chunk);
//   }

//   // รวมเป็น Buffer
//   const buffer = Buffer.concat(chunks);

//   // แปลงเป็น Base64
//   const base64Image = buffer.toString("base64");

//   console.log("Base64:", base64Image);

//   const formData = new FormData();
//   formData.append("type", "tempImage");
//   formData.append("userId", event.source.userId);
//   formData.append("image", base64Image);
//   formData.append("fileName", "test.png"); // optional
//   formData.append("contentType", "image/png"); // optional
//   formData.append("status", "pending"); // optional

//   // ต้องใส่ headers ของ FormData
//   const response = await axios.post(
//     "https://script.google.com/macros/s/AKfycbzn9mNQd9wBOvf2DCYc4MNJQE9ssVKNi-0hMdoFo2C-noocw89mKFSwn-lihQ1jEGbm/exec",
//     formData
//   );

//   console.log(response);

//    // ส่ง quick reply ให้ user
//   await replyMessageLine(event.replyToken, {
//     type: "text",
//     text: "คุณต้องการอัพโหลดภาพนี้หรือไม่?",
//     quickReply: {
//       items: [
//         {
//           type: "action",
//           action: {
//             type: "message",
//             label: "✅ ใช่",
//             text: "upload_yes"
//           }
//         },
//         {
//           type: "action",
//           action: {
//             type: "message",
//             label: "❌ ไม่ใช่",
//             text: "upload_no"
//           }
//         }
//       ]
//     }
//   });
// }

// export default handleImage;



import axios from "axios";
import { replyMessageLine } from "./replyMessage.js";

async function handleImage(event) {
  const messageId = event.message.id;

  // --- ดึง content โดยตรงจาก LINE API ---
  const response = await fetch(
    `https://api-data.line.me/v2/bot/message/${messageId}/content`,
    {
      headers: {
        Authorization: `Bearer ${process.env.CHANNEL_ACCESS_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`LINE API error: ${response.status} ${response.statusText}`);
  }

  // แปลงเป็น buffer → base64
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64Image = buffer.toString("base64");

  // --- ส่งไปพักที่ Google Apps Script ---
  const formData = new FormData();
  formData.append("type", "tempImage");
  formData.append("userId", event.source.userId);
  formData.append("image", base64Image);
  formData.append("fileName", `image_${Date.now()}.png`);
  formData.append("contentType", "image/png");
  formData.append("status", "pending");

  const res = await axios.post(
    "https://script.google.com/macros/s/AKfycbzn9mNQd9wBOvf2DCYc4MNJQE9ssVKNi-0hMdoFo2C-noocw89mKFSwn-lihQ1jEGbm/exec",
    formData
    // { headers: formData.getHeaders?.() } // ป้องกัน axios formdata error
  );

  // console.log("Saved to temp:", res.data);

  // --- ตอบกลับ user เป็น quick reply ---
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
            text: "upload_yes",
          },
        },
        {
          type: "action",
          action: {
            type: "message",
            label: "❌ ไม่ใช่",
            text: "upload_no",
          },
        },
      ],
    },
  });
}

export default handleImage;
