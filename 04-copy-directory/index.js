const path = require('path');
const fs = require('fs');

const folderPath = (path.join(__dirname, 'files'));
const newFolderPath = (path.join(__dirname, 'files-copy'));

fs.mkdir(newFolderPath, { recursive: true, force: true }, () => {
  fs.readdir(folderPath, (err, filenames) => {
    for (let filename of filenames) {
      const filePath = (path.join(folderPath, filename));
      const newFilePath = (path.join(newFolderPath, filename));
      fs.copyFile(filePath, newFilePath, (err) => {
        if (err) throw err;
      });
    }
  })
});
