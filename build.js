// compiles all main .ejs files to html

const fs = require('fs');
const ejs = require('ejs');

fs.readdir('templates', (err,files) => {
  console.log(`\nRendering:`);
  files.forEach(file => {
    if (file.slice(0,1) !== '_'){
      const filename = file.substring(0,file.length-4) + '.html'
      console.log(`\t${file}  =>  ${filename}`);

      // remove files from build

      fs.readFile(`templates/${file}`, (err, data) => {
        if (err) { console.log(err); return; }
        const str = data.toString('utf8')
        // console.log(data.toString('utf8'));
        const html = ejs.render(str, {}, {filename: filename});
        fs.writeFile(`build/${filename}`, html, err => {
          if (err) return console.log(err);
          console.log('.');
        })
      })
    }
  })
})
