import dotenv from 'dotenv';
dotenv.config();

import * as line from '@line/bot-sdk';

// create LINE SDK config from env variables
export const lineConfig = {
  channelSecret: process.env.CHANNEL_SECRET,
};

// create LINE SDK client
export const lineclient = new line.messagingApi.MessagingApiClient({
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

// 👇 client สำหรับอัพโหลดไฟล์ (เช่น richmenu image)
export const lineBlobClient = new line.messagingApi.MessagingApiBlobClient({
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
});
