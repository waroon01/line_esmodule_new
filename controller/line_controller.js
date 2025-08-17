import { handleMessage } from "../utils/line/handleMessage.js";
import startLineLoading from "../utils/line/lineLoading.js";


const handleEvent = async (event) => {
  try {
    await startLineLoading(event.source.userId, 5)
    const eventType = event.type;
    switch (eventType) {
      case "message":
        await handleMessage(event)
        break;
      case "follow":
        console.log("follower");
        break;
    }

    // เขียน logic จัดการ event ต่อ
  } catch (err) {
    throw new Error(`handleEvent error:${err}`); // ให้มันเด้งไป catch ของ Promise.all
  }
};

export default handleEvent;
