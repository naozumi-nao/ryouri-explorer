import sharp from 'sharp';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { resolve } from 'path';
const __dirname = import.meta.dirname;

const target = resolve(__dirname, 'src/public/images/heros');
const destination = resolve(__dirname, 'src/public/images');

if (!existsSync(destination)) {
  mkdirSync(destination);
}

readdirSync(target)
  .forEach((image) => {

    sharp(`${target}/${image}`)
      .resize(1080)
      .toFile(resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`),
      );

    sharp(`${target}/${image}`)
      .resize(720)
      .toFile(resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-medium.jpg`),
      );

    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`),
      );
  });