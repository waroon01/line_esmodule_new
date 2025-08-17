import { handleMessage } from "../utils/handleMessage.js";
import startLineLoading from "../utils/lineLoading.js";

const handleEvent = async (event) => {
  try {
    await startLineLoading(event.source.userId, 10)
    // console.log(event.type);
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
