const fs = require('fs');
const path = require('path');

const folderPath = (path.join(__dirname, 'secret-folder'));


fs.promises.readdir(folderPath, { withFileTypes: true })
  .then(filenames => {
    for (let filename of filenames) {
      const filePath = (path.join(__dirname, 'secret-folder', filename.name));
      if (!filename.isDirectory()) {
        let result = '';
        const fileName = filename.name.split('.')[0];
        const type = path.extname(filename.name).slice(1);
        result += fileName + ' - ' + type + ' - ';
        fs.promises.stat(filePath)
          .then(stats => {
            result += stats.size + 'b';
            console.log(result);
          });
      }
    }
  });

