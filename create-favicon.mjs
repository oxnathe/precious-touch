import sharp from "sharp";

await sharp("public/logo/precious-touch-logo.webp")
  .resize(256, 256, {
    fit: "contain",
    background: {
      r: 255,
      g: 255,
      b: 255,
      alpha: 0,
    },
  })
  .png()
  .toFile("public/logo/precious-touch-favicon.png");

console.log("Favicon created successfully.");