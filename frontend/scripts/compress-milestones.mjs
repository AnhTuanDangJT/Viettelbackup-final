import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const milestonesDir = path.join(__dirname, '../public/images/journey/milestones');

const files = fs.readdirSync(milestonesDir);

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const filePath = path.join(milestonesDir, file);
  const ext = path.extname(file).toLowerCase();
  const stat = fs.statSync(filePath);
  const sizeBefore = stat.size;
  totalBefore += sizeBefore;

  try {
    const buffer = fs.readFileSync(filePath);
    let processed;

    if (ext === '.png') {
      // Convert PNG to JPEG for photos (huge size reduction)
      const newName = file.replace('.png', '.jpg');
      const newPath = path.join(milestonesDir, newName);
      processed = await sharp(buffer)
        .resize({ width: 600, withoutEnlargement: true })
        .jpeg({ quality: 78, progressive: true, mozjpeg: true })
        .toBuffer();
      fs.writeFileSync(newPath, processed);
      fs.unlinkSync(filePath); // remove original PNG
      const sizeAfter = processed.length;
      totalAfter += sizeAfter;
      console.log(`✅ ${file} → ${newName}: ${Math.round(sizeBefore/1024)}KB → ${Math.round(sizeAfter/1024)}KB (${Math.round((1 - sizeAfter/sizeBefore)*100)}% smaller)`);
    } else if (ext === '.jpeg' || ext === '.jpg') {
      processed = await sharp(buffer)
        .resize({ width: 600, withoutEnlargement: true })
        .jpeg({ quality: 78, progressive: true, mozjpeg: true })
        .toBuffer();
      fs.writeFileSync(filePath, processed);
      const sizeAfter = processed.length;
      totalAfter += sizeAfter;
      console.log(`✅ ${file}: ${Math.round(sizeBefore/1024)}KB → ${Math.round(sizeAfter/1024)}KB (${Math.round((1 - sizeAfter/sizeBefore)*100)}% smaller)`);
    } else {
      totalAfter += sizeBefore;
      console.log(`⏭️  Skipped: ${file}`);
    }
  } catch (err) {
    totalAfter += sizeBefore;
    console.error(`❌ Error processing ${file}:`, err.message);
  }
}

console.log(`\n📦 Total: ${Math.round(totalBefore/1024)}KB → ${Math.round(totalAfter/1024)}KB (${Math.round((1 - totalAfter/totalBefore)*100)}% reduction)`);
