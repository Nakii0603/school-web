const sharp = require("sharp");

sharp("./public/img/Gallery1.png")
  .resize({ width: 800 })
  .toFormat("webp", { quality: 80 })
  .toFile("./public/img/Gallery1_optimized.webp", (err, info) => {
    if (err) {
      console.error("Error processing image:", err);
    } else {
      console.log("Image processed successfully:", info);
    }
  });
