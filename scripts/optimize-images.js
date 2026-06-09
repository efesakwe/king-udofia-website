const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const INPUT_DIR = path.join(__dirname, "../public/images");
const OUTPUT_DIR = path.join(INPUT_DIR, "optimized");
const MAX_WIDTH = 1920;
const WEBP_QUALITY = 80;

async function optimizeImages() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const files = fs
    .readdirSync(INPUT_DIR)
    .filter((file) => /\.jpe?g$/i.test(file));

  if (!files.length) {
    console.log("No JPEG files found in public/images/");
    return;
  }

  console.log(`Processing ${files.length} images...\n`);

  let processed = 0;
  let skipped = 0;

  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const baseName = path.parse(file).name;
    const outputPath = path.join(OUTPUT_DIR, `${baseName}.webp`);

    try {
      const inputStat = fs.statSync(inputPath);
      const outputExists = fs.existsSync(outputPath);

      if (outputExists) {
        const outputStat = fs.statSync(outputPath);
        if (outputStat.mtimeMs >= inputStat.mtimeMs) {
          skipped++;
          continue;
        }
      }

      const image = sharp(inputPath);
      const metadata = await image.metadata();

      await image
        .resize({
          width: metadata.width > MAX_WIDTH ? MAX_WIDTH : undefined,
          withoutEnlargement: true,
        })
        .webp({ quality: WEBP_QUALITY })
        .toFile(outputPath);

      const outputStat = fs.statSync(outputPath);
      const savedPct = (
        (1 - outputStat.size / inputStat.size) *
        100
      ).toFixed(1);

      processed++;
      console.log(
        `✓ ${file} → optimized/${baseName}.webp (${(outputStat.size / 1024 / 1024).toFixed(2)} MB, -${savedPct}%)`,
      );
    } catch (error) {
      console.error(`✗ Failed: ${file}`, error.message);
    }
  }

  console.log(
    `\nDone. ${processed} optimized, ${skipped} skipped (up to date).`,
  );
}

optimizeImages().catch((error) => {
  console.error(error);
  process.exit(1);
});
