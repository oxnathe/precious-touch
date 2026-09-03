import sharp from "sharp";

const input = "public/logo/p-logo.tif";

await sharp(input)
  .resize({
    width: 1200,
    withoutEnlargement: true,
  })
  .webp({
    quality: 90,
  })
  .toFile("public/logo/precious-touch-logo.webp");

console.log("Logo converted successfully.");