import yauzl from 'yauzl';
import fs from 'fs';
import path from 'path';

function extractZip(zipPath, extractPath) {
  return new Promise((resolve, reject) => {
    yauzl.open(zipPath, { lazyEntries: true }, (err, zipfile) => {
      if (err) {
        reject(err);
        return;
      }

      zipfile.readEntry();
      
      zipfile.on('entry', (entry) => {
        const fullPath = path.join(extractPath, entry.fileName);
        
        if (/\/$/.test(entry.fileName)) {
          // Directory entry
          fs.mkdirSync(fullPath, { recursive: true });
          zipfile.readEntry();
        } else {
          // File entry
          const dir = path.dirname(fullPath);
          fs.mkdirSync(dir, { recursive: true });
          
          zipfile.openReadStream(entry, (err, readStream) => {
            if (err) {
              reject(err);
              return;
            }
            
            const writeStream = fs.createWriteStream(fullPath);
            readStream.pipe(writeStream);
            
            writeStream.on('close', () => {
              zipfile.readEntry();
            });
            
            writeStream.on('error', reject);
          });
        }
      });
      
      zipfile.on('end', () => {
        console.log('Extraction complete!');
        resolve();
      });
      
      zipfile.on('error', reject);
    });
  });
}

// Extract the admin-panel.zip file
extractZip('./admin-panel.zip', './')
  .then(() => {
    console.log('Successfully extracted admin-panel.zip');
    // List the contents to see what was extracted
    const fs = require('fs');
    const contents = fs.readdirSync('./', { withFileTypes: true });
    console.log('\nExtracted contents:');
    contents.forEach(item => {
      if (item.isDirectory()) {
        console.log(`📁 ${item.name}/`);
      } else {
        console.log(`📄 ${item.name}`);
      }
    });
  })
  .catch(err => {
    console.error('Error extracting ZIP file:', err);
  });