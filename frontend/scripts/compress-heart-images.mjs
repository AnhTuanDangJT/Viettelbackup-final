import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { existsSync } from 'fs';

const dirs = [
  {
    input: 'public/images/drive-download-20260428T084631Z-3-001',
    output: 'public/images/heart-webp',
  },
  {
    input: 'public/images/dangbophanvachibo',
    output: 'public/images/heart-webp',
  },
];

const SUPPORTED = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

async function compress() {
  if (!existsSync('public/images/heart-webp')) {
    await mkdir('public/images/heart-webp', { recursive: true });
  }

  for (const { input, output } of dirs) {
    const files = await readdir(input);
    for (const file of files) {
      const ext = extname(file);
      if (!SUPPORTED.includes(ext)) continue;

      const name = basename(file, ext);
      const src = join(input, file);
      const dest = join(output, name + '.webp');

      try {
        await sharp(src)
          .resize({ width: 400, height: 400, fit: 'cover', withoutEnlargement: true })
          .webp({ quality: 55 })
          .toFile(dest);
        console.log(`✓ ${file} → ${name}.webp`);
      } catch (e) {
        console.error(`✗ ${file}: ${e.message}`);
      }
    }
  }

  console.log('\nDone! All images compressed to heart-webp/');
}

compress();
