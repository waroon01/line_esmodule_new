import { handleMessage } from "../utils/line/handleMessage.js";



const handleEvent = async (event) => {
  try {
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
