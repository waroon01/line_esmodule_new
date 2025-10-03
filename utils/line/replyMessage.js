import { lineclient } from "../../config/line_config.js";

export const replyMessageLine = async (replyToken, message) => {
  try {
    return await lineclient.replyMessage({
      replyToken,
      messages: [message]
    });
  } catch (err) {
    console.error("LINE reply error:", err);
    throw err; // ให้เด้งไป catch ของฟังก์ชันที่เรียกใช้
  }
};

export const pushMessageLine = async (userId, message) => {
  try {
    return await lineclient.pushMessage({
      to: userId,
      messages: [message]
    });
  } catch (err) {
    console.error("LINE push error:", err.response?.data || err);
    throw err;
  }
};
