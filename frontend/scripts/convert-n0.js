const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '../public/images/heart-webp/n0.jpg');
const outputPath = path.join(__dirname, '../public/images/heart-webp/n0.webp');

async function convert() {
    try {
        console.log('Converting n0.jpg to WebP using sharp...');
        await sharp(inputPath)
            .resize(800)
            .webp({ quality: 80 })
            .toFile(outputPath);
        console.log('Conversion successful: ' + outputPath);
    } catch (err) {
        console.error('Conversion failed: ' + err.message);
    }
}

convert();
