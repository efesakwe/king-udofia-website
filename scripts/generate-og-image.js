const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const INPUT = path.join(__dirname, "../public/images/IMG_2533.jpg");
const OUTPUT = path.join(__dirname, "../public/og-image.jpg");
const WIDTH = 1200;
const HEIGHT = 630;

async function generateOgImage() {
  if (!fs.existsSync(INPUT)) {
    throw new Error(`Source image not found: ${INPUT}`);
  }

  await sharp(INPUT)
    .rotate()
    .resize(WIDTH, HEIGHT, { fit: "cover", position: "centre" })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(OUTPUT);

  const { size } = fs.statSync(OUTPUT);
  console.log(
    `✓ og-image.jpg (${WIDTH}x${HEIGHT}, ${(size / 1024).toFixed(0)} KB)`,
  );
}

generateOgImage().catch((error) => {
  console.error(error);
  process.exit(1);
});
