import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = './src/assets';
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.match(/\.(png|jpg|jpeg)$/i)) {
    const input = path.join(dir, file);
    const output = path.join(dir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
    
    sharp(input)
      .webp({ quality: 80 })
      .toFile(output)
      .then(() => console.log('Successfully compressed:', file, '->', output.split(path.sep).pop()))
      .catch(err => console.error('Error compressing', file, err));
  }
}
