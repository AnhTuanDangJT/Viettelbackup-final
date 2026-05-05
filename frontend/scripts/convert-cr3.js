const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '../public/images/heart-webp/temp_raw.cr3');
const outputPath = path.join(__dirname, '../public/images/heart-webp/410A1896.webp');

async function convert() {
    try {
        console.log('Attempting to convert CR3 to WebP using sharp...');
        await sharp(inputPath)
            .resize(800) // Resize for web optimization
            .webp({ quality: 80 })
            .toFile(outputPath);
        console.log('Conversion successful: ' + outputPath);
    } catch (err) {
        console.error('Conversion failed: ' + err.message);
        if (err.message.includes('unsupported format')) {
            console.log('Sharp does not support CR3 format directly.');
        }
    }
}

convert();
