const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

const directories = ['other', 'components', 'api', 'modules', 'structures', 'utilities'];

let indexFile = '';
for (const dir of directories) {
  const dirPath = path.join(rootDir, `./${dir}`);
  const recursiveSearch = (dir) => {
    const subdirs = fs.readdirSync(dir);
    const files = subdirs.map((subdir) => {
      const res = path.join(dir, subdir);
      return fs.statSync(res).isDirectory() ? recursiveSearch(res) : res;
    }).filter(Boolean);

    files.forEach(file => {
      indexFile += `${fs.readFileSync(file, 'utf-8')}\n\n`;
    });
  };

  recursiveSearch(dirPath);
}

fs.writeFileSync(path.join(__dirname, 'build', 'index.d.ts'), indexFile);