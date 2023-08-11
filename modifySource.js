import fs from 'fs';
import { build } from 'vite';

async function modifySource() {
  // Build the Vite project
  await build();

  // Read the built index.html file
  const indexPath = './dist/index.html'; // Update the path to the built index.html file
  let indexContent = fs.readFileSync(indexPath, 'utf-8');

  // Modify the index.html content to inject basename
  const isProduction = process.env.NODE_ENV === 'production';
  const basename = isProduction ? '/cicc' : '/';
  indexContent = indexContent.replace(/<Router basename="\/{BASENAME}">/, `<Router basename="/cicc">`);

  // Write the modified index.html file
  fs.writeFileSync(indexPath, indexContent);

  console.log('Source code modified with basename injection.');
}

modifySource();