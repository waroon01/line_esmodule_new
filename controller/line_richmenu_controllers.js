import path from "path";
import { readFileSync } from "node:fs"; // ✅ ใช้ import แทน require
import { lineBlobClient, lineclient } from "../config/line_config.js";

export const createRichmenu = async (req, res) => {
  try {
    const richMenu = {
      size: {
        width: 2500,
        height: 1686,
      },
      selected: false,
      name: "richmenu-a",
      chatBarText: "Tap to open",
      areas: [
        {
          bounds: {
            x: 0,
            y: 0,
            width: 1250,
            height: 1686,
          },
          action: {
            type: "uri",
            uri: "https://developers.line.biz/",
          },
        },
        {
          bounds: {
            x: 1251,
            y: 0,
            width: 1250,
            height: 1686,
          },
          action: {
            type: "richmenuswitch",
            richMenuAliasId: "richmenu-alias-b",
            data: "richmenu-changed-to-b",
          },
        },
      ],
    };

    // สร้าง rich menu
    const { richMenuId } = await lineclient.createRichMenu(richMenu);
    console.log("✅ Created richmenu:", richMenuId);

    // อัพโหลดรูป
    const imagePath = path.resolve("./public/richmenu-a.png");
    const bufferA = readFileSync(imagePath);

    await lineBlobClient.setRichMenuImage(
      richMenuId,
      new Blob([bufferA], { type: "image/png" })
    );
    console.log("✅ Uploaded richmenu image");

    // set default
    await lineclient.setDefaultRichMenu(richMenuId);
    console.log("✅ Set default richmenu");

    res.json({
      message: "Richmenu created & set default successfully",
      richMenuId,
    });
  } catch (error) {
    console.error("❌ Error creating richmenu:", error);
    res.status(500).json({ error: error.message });
  }
};

export const removeAll_Ricemenu = async (req, res) => {
  try {
    const richMenusResponse = await lineclient.getRichMenuList();
    const richMenus = richMenusResponse.richmenus || []; // ✅ ต้องเข้าถึง property 'richmenus'
    const deleted = [];

    for (const menu of richMenus) {
      await lineclient.deleteRichMenu(menu.richMenuId);
      deleted.push(menu.richMenuId);
      console.log(`✅ Deleted richmenu: ${menu.richMenuId}`);
    }

    res.json({
      message: "Deleted all richmenus successfully",
      deleted,
    });
  } catch (error) {
    console.error("❌ Error deleting richmenus:", error);
    res.status(500).json({ error: error.message });
  }
};
