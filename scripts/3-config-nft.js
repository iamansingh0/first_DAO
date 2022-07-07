import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xC35e006e94e3109eE8cfbA5f4581F340B5610808");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Fund Token",
        description: "This NFT will give you access to FundDAO!",
        image: readFileSync("scripts/assets/nft.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();