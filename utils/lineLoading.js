
import axios from "axios";

async function startLineLoading(chatId, loadingSeconds = 5) {
  const channelAccessToken = process.env.CHANNEL_ACCESS_TOKEN; // หรือใส่เป็นสตริงเลย

  try {
    const response = await axios.post(
      'https://api.line.me/v2/bot/chat/loading/start',
      {
        chatId: chatId,
        loadingSeconds: loadingSeconds
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${channelAccessToken}`
        }
      }
    );

    // console.log('Loading started:', response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to start loading:', error.response?.data || error.message);
    throw error;
  }
}

export default startLineLoading