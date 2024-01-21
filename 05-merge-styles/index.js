const path = require('path');
const fs = require('fs');

const folderPath = (path.join(__dirname, 'styles'));
const newFolderPath = (path.join(__dirname, 'project-dist'));

const output = fs.createWriteStream(path.join(newFolderPath, 'bundle.css'));

fs.promises.readdir(folderPath, { withFileTypes: true })
  .then(filenames => {
    for (let filename of filenames) {
      const type = path.extname(filename.name).slice(1);
      if (type === 'css' && !filename.isDirectory()) {
        let arr = [];
        const input = fs.createReadStream(path.join(folderPath, filename.name), 'utf-8');
        input.on('data', chank => arr.push(chank));
        input.on('end', () => output.write(arr.join('') + '\n'));
      }
    }
  });
