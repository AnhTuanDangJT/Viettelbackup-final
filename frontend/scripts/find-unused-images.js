import fs from 'fs';
import path from 'path';

const pagePath = 'c:/Users/Admin/Desktop/Viettel final/frontend/src/app/cau-chuyen/page.tsx';
const folderPath = 'c:/Users/Admin/Desktop/Viettel final/frontend/public/images/heart-webp';

const content = fs.readFileSync(pagePath, 'utf8');
const files = fs.readdirSync(folderPath);

console.log('Unused files in heart-webp:');
files.forEach(file => {
    if (!content.includes(file)) {
        console.log(file);
    }
});
