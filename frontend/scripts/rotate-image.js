const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '../public/images/heart-webp/8.webp');
const outputPath = path.join(__dirname, '../public/images/heart-webp/8_rotated.webp');

async function rotate() {
    try {
        console.log('Rotating 8.webp by 90 degrees...');
        await sharp(inputPath)
            .rotate(90)
            .toFile(outputPath);
        console.log('Rotation successful: ' + outputPath);
    } catch (err) {
        console.error('Rotation failed: ' + err.message);
    }
}

rotate();
