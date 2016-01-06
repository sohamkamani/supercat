import fs from 'fs';

const grammars = fs.readdirSync('./grammars');

let langMaps = grammars.map(lang =>{
  let name = lang.split('.')[0];
  let exts = require('./grammars/'+ name).fileTypes;
  return {
    name, exts
  };
});
console.log(JSON.stringify(langMaps));
